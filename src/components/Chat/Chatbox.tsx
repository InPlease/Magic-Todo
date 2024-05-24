// Dependencies
import React, { useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ArrowBigUp } from 'lucide-react'
// Components
import { Message } from './ChatComponent'
import LoadingIndicator from '../LoadingIndicator'

interface ChatBoxProps {
  messages: Message[]
  loading: boolean
  message: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
  handleSendMessage: (msg?: string) => void
}

/**
 * This need to be improved, since
 * we will get from users (Backend)
 *
 * This task are examples about what we can do,
 * remind, organize by or create a plan by topics.
 *
 * Users can have topics: #science, #gym, #learn
 * Chat gpt will create a list then we will transform taht
 * to task.
 *
 * This need code in backend
 */
const predefinedPrompts = [
  'How can I organize my tasks better?',
  'Remind me to finish my project',
  'Create a plan for me, using my topics',
]

const ChatBox: React.FC<ChatBoxProps> = ({
  messages,
  loading,
  message,
  setMessage,
  handleSendMessage,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const promptsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messages.length > 0 && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  return (
    <div className="max-w-[747px] animate-pulse flex flex-col  transition-all duration-300 max-h-0 hover:max-h-[700px] rounded-t-default shadow-lg rounded-lg p-4 bg-gray">
      <div className="max-h-[700px] overflow-auto hide-scroll-bar mt-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`w-fit flex items-start gap-2.5 p-2 rounded break-words ${
              msg.sender === 'user'
                ? 'bg-beige text-black self-end ml-auto rounded-default'
                : 'bg-orange text-black self-start rounded-default'
            }`}
          >
            <div className="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 dark:text-black">
                  {msg.sender === 'user' ? 'You' : 'Magic Bot'}
                </span>
                <span className="text-sm text-black dark:text-gray-400 font-extrabold opacity-70">
                  {msg.timestamp}
                </span>
              </div>
              <div className="text-sm font-normal py-2.5 text-gray-900 dark:text-black">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {msg.text}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div>
        <div className="mt-4 flex items-center relative">
          <textarea
            className="rounded-default w-full p-2 pr-10 border border-gray-300 rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage()
            }}
          />
          <button
            className="w-[36px] h-[36px] absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-gray rounded-full flex items-center justify-center"
            onClick={() => handleSendMessage(message)}
            disabled={!message.trim() || loading}
          >
            {loading ? <LoadingIndicator loading /> : <ArrowBigUp />}
          </button>
        </div>
        <div ref={promptsRef} className="flex mt-4 space-x-2">
          {predefinedPrompts.map((prompt, index) => (
            <button
              key={index}
              onClick={() => handleSendMessage(prompt)}
              className="bg-blue-500 text-white p-2 rounded-default transition-all hover:-translate-y-3"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChatBox
