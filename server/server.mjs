import express from 'express'
import OpenAI from 'openai'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()
const port = 3001

const openai = new OpenAI({})

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

  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')

  try {
    const stream = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: message }],
      stream: true,
    })

    let responseFragments = []

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content
      if (content) {
        responseFragments.push(content)
      }
    }

    res.write(`${JSON.stringify({ response: responseFragments })}`)
  } catch (error) {
    console.error('Error fetching data from OpenAI:', error)
    res.write(`data: {"error": "Error fetching data from OpenAI"}\n\n`)
  } finally {
    res.end()
  }
})

const cleanMessage = (fragments) => {
  return fragments
    .join(' ')
    .replace(/\s+([?!.])/g, '$1')
    .trim()
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
