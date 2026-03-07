const fs = require('fs');

const path = 'components/chat-interface.tsx';
let chat = fs.readFileSync(path, 'utf8');

const regex = /try \{[\s\S]*?\} catch \(error\)/;

const newTryCatch = `try {
      const response = await fetch("https://api.mistral.ai/v1/conversations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": \`Bearer 8xF7806sb3OwDZOAEgLXbNZmC5PB2GmG\`
        },
        body: JSON.stringify({
          agent_id: "ag\\\\019cc748e87670b39388733f6a2500a9",
          inputs: [{ role: "user", "content": currentInput }]
        })
      })

      if (!response.ok) {
        throw new Error("API failed")
      }

      const data = await response.json()

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        content: data.choices?.[0]?.message?.content || "No response"
      }

      setMessages(prev => [...prev, aiMsg])
    } catch (error)`;

chat = chat.replace(regex, newTryCatch);
fs.writeFileSync(path, chat);
