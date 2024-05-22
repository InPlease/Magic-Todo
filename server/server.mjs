import express from 'express'
import OpenAI from 'openai'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()
const port = 3001

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
})

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
)

app.use(express.json())

app.post('/api/chat', async (req, res) => {
  const { message } = req.body

  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')

  try {
    const thread = await openai.beta.threads.create()

    await openai.beta.threads.messages.create(thread.id, {
      role: 'user',
      content: message,
    })

    const run = openai.beta.threads.runs.stream(thread.id, {
      assistant_id: 'asst_kkibhhzZDa7vnQ1suVXItxYH',
    })

    let responseFragments = []

    run
      .on('textCreated', (text) => process.stdout.write('\nassistant > '))
      .on('textDelta', (textDelta, snapshot) => {
        process.stdout.write(textDelta.value)
        responseFragments.push(textDelta.value)
        res.write(`data: ${JSON.stringify({ response: textDelta.value })}\n\n`)
      })
      .on('toolCallCreated', (toolCall) =>
        process.stdout.write(`\nassistant > ${toolCall.type}\n\n`)
      )
      .on('toolCallDelta', (toolCallDelta, snapshot) => {
        if (toolCallDelta.type === 'code_interpreter') {
          if (toolCallDelta.code_interpreter.input) {
            process.stdout.write(toolCallDelta.code_interpreter.input)
          }
          if (toolCallDelta.code_interpreter.outputs) {
            process.stdout.write('\noutput >\n')
            toolCallDelta.code_interpreter.outputs.forEach((output) => {
              if (output.type === 'logs') {
                process.stdout.write(`\n${output.logs}\n`)
              }
            })
          }
        }
      })
      .on('end', () => {
        const cleanResponse = cleanMessage(responseFragments)
        res.write(JSON.stringify({ response: cleanResponse }))
        res.end()
      })
  } catch (error) {
    console.error('Error fetching data from OpenAI:', error)
    res.write(JSON.stringify({ error: 'Error fetching data from OpenAI' }))
    res.end()
  }
})

const cleanMessage = (fragments) => {
  return fragments
    .join('')
    .replace(/\s+([?!.])/g, '$1')
    .trim()
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
