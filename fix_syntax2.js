const fs = require('fs');

const path = 'components/chat-interface.tsx';
let chat = fs.readFileSync(path, 'utf8');

chat = chat.replace(/\}\)\n\n      if/, '})\n\n      if');

fs.writeFileSync(path, chat);
