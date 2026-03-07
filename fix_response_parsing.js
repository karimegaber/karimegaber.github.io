const fs = require('fs');

const path = 'components/chat-interface.tsx';
let chat = fs.readFileSync(path, 'utf8');

const regex = /data\.choices\?\.\[0\]\?\.message\?\.content \|\| "No response"/;
const newParsing = `data.outputs?.[0]?.content || "No response"`;

chat = chat.replace(regex, newParsing);
fs.writeFileSync(path, chat);
