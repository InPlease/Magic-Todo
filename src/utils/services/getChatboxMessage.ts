export const sendMessage = async (message: string) => {
  const res = await fetch('http://localhost:3001/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  })

  if (res.body) {
    const reader = res.body.getReader()
    const decoder = new TextDecoder()
    let completedResponse = ''
    const readChunk: any = async () => {
      if (!reader) return
      const { value, done } = await reader.read()
      if (done) return completedResponse
      completedResponse += decoder.decode(value, { stream: true })
      return readChunk()
    }
    return readChunk()
  }
}
