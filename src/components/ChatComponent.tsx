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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    toggleVisibility();
  }, []);

  const handleSendMessage = async () => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    const userMessage: Message = {
      text: message,
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
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      const aiMessage: Message = {
        text: data.response,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleVisibility = () => {
    if (!isVisible) {
      anime({
        targets: '#chatbox',
        translateY: [0, 100],
        duration: 800,
        complete: () => {
          setIsVisible(true);
        },
      });

      anime({
        targets: '#chat-container',
        maxHeight: 0,
        duration: 800,
      });
    } else {
      anime({
        targets: '#chatbox',
        translateY: [100, 0],
        duration: 800,
        begin: () => {
          setIsVisible(false);
        },
      });

      anime({
        targets: '#chat-container',
        maxHeight: '60vh',
        duration: 800,
      });
    }
  };

  return (
    <>
      <ChatBox
        messages={messages}
        loading={loading}
        message={message}
        setMessage={setMessage}
        handleSendMessage={handleSendMessage}
        toggleVisibility={toggleVisibility}
      />
    </>
  );
};

export default Chat;
