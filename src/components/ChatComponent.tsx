import React, { useState, useEffect } from 'react';
import anime from 'animejs';
import ChatBox from './Chatbox';

export interface Message {
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

const Chat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleSendMessage = async (msg?: string) => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    console.log(msg);
    const userMessage: Message = {
      text: msg || message,
      sender: 'user',
      timestamp: currentTime,
    };
    setMessages((prev) => [...prev, userMessage]);
    setMessage('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: msg
          ? JSON.stringify({ message: msg })
          : JSON.stringify({ message }),
      });

      const reader = response.body?.getReader();
      const decoder = new TextDecoder('utf-8');

      let receivedText = '';
      let aiMessageText = '';

      while (true) {
        const { done, value } = (await reader?.read()) || {};
        if (done) break;
        receivedText += decoder.decode(value, { stream: true });

        const lines = receivedText.split('\n\n');
        receivedText = lines.pop() || ''; // Keep the last incomplete line for the next iteration

        for (const line of lines) {
          if (line.trim().startsWith('data: ')) {
            const data = JSON.parse(line.trim().substring(6));
            if (data.response) {
              aiMessageText += data.response;
            }
          }
        }
      }

      if (aiMessageText) {
        const aiMessage: Message = {
          text: aiMessageText,
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
        };
        setMessages((prev) => [...prev, aiMessage]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="chatbox"
      className="fixed bottom-0"
    >
      <ChatBox
        messages={messages}
        loading={loading}
        message={message}
        setMessage={setMessage}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default Chat;
