const apiKey = "8xF7806sb3OwDZOAEgLXbNZmC5PB2GmG";
const agentId = "ag:019cc748e87670b39388733f6a2500a9";

async function testAgent1() {
  const response = await fetch("https://api.mistral.ai/v1/agents/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      agent_id: agentId,
      messages: [{ role: "user", "content": "Hello" }]
    })
  });
  console.log("agents/completions:", response.status, await response.text());
}

testAgent1();
