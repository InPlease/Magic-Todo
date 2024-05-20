import React, { RefObject, useEffect, useRef } from 'react'
import { ArrowDown, ArrowBigUp } from 'lucide-react'
import LoadingIndicator from './LoadingIndicator'
import { Message } from './ChatComponent'

interface ChatBoxProps {
  messages: Message[]
  loading: boolean
  message: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
  handleSendMessage: () => void
  toggleVisibility: () => void
}

const ChatBox: React.FC<ChatBoxProps> = ({
  messages,
  loading,
  message,
  setMessage,
  handleSendMessage,
  toggleVisibility,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messages.length > 0 && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  return (
    <div
      id="chatbox"
      className="rounded-t-default fixed bottom-0 shadow-lg rounded-lg p-4 flex flex-col w-1/2 max-h-[60vh] bg-opacity-90 bg-gray"
    >
      <div className="flex justify-center items-center mb-2 ">
        <button
          onClick={toggleVisibility}
          className="rounded-default hover:text-white opacity-30 hover:opacity-100"
        >
          <ArrowDown />
        </button>
      </div>
      <div
        id="chat-container"
        className="flex-1 overflow-auto hide-scroll-bar mt-4 space-y-4"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`w-fit flex items-start gap-2.5 p-2 rounded break-words ${
              msg.sender === 'user'
                ? 'bg-beige text-black self-end ml-auto rounded-default'
                : 'bg-orange text-black self-start rounded-default'
            }`}
          >
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 dark:text-black">
                  {msg.sender === 'user' ? 'You' : 'Magic Bot'}
                </span>
                <span className="text-sm text-black dark:text-gray-400 font-extrabold opacity-70">
                  {msg.timestamp}
                </span>
              </div>
              <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-black">
                {msg.text}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="mt-4 flex items-center relative">
        <input
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
          onClick={handleSendMessage}
          disabled={!message.trim() || loading}
        >
          {loading ? <LoadingIndicator loading /> : <ArrowBigUp />}
        </button>
      </div>
    </div>
  )
}

export default ChatBox
