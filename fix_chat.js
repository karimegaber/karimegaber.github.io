const fs = require('fs');

const path = 'components/chat-interface.tsx';
let chat = fs.readFileSync(path, 'utf8');

const regex = /const handleSubmit = \(e: React\.FormEvent\) => \{[\s\S]*?\}\n\n  return \(/;

const newHandleSubmit = `const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const currentInput = input.trim()
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: currentInput
    }

    setMessages(prev => [...prev, userMsg])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("https://api.mistral.ai/v1/agents/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": \`Bearer 8xF7806sb3OwDZOAEgLXbNZmC5PB2GmG\`
        },
        body: JSON.stringify({
          agent_id: "ag:019cc748e87670b39388733f6a2500a9",
          messages: [{ role: "user", "content": currentInput }]
        })
      })

      if (!response.ok) {
        throw new Error("API failed")
      }

      const data = await response.json()

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        content: data.choices[0].message.content
      }

      setMessages(prev => [...prev, aiMsg])
    } catch (error) {
      console.error("Chat error:", error)
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        content: "AI is currently resting. Try again later."
      }
      setMessages(prev => [...prev, errorMsg])
    } finally {
      setIsLoading(false)
    }
  }

  return (`;

chat = chat.replace(regex, newHandleSubmit);
fs.writeFileSync(path, chat);
