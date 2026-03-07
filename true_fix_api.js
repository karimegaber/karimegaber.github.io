const fs = require('fs');

const path = 'components/chat-interface.tsx';
let chat = fs.readFileSync(path, 'utf8');

const regex = /const response = await fetch\("https:\/\/api\.mistral\.ai\/v1\/agents\/completions", \{[\s\S]*?\}\)/;

const newFetch = `const response = await fetch("https://api.mistral.ai/v1/agents/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": \`Bearer 8xF7806sb3OwDZOAEgLXbNZmC5PB2GmG\`
        },
        body: JSON.stringify({
          agent_id: "ag:019cc748e87670b39388733f6a2500a9",
          messages: [{ role: "user", "content": currentInput }]
        })
      })`;

chat = chat.replace(regex, newFetch);
fs.writeFileSync(path, chat);
