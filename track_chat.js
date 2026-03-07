const fs = require('fs');

const path = 'components/chat-interface.tsx';
let chat = fs.readFileSync(path, 'utf8');

// Add import
chat = chat.replace('import { useChat } from "@/components/chat-context"', 'import { useChat } from "@/components/chat-context"\nimport { trackEvent } from "@/lib/analytics"');

// Add tracking call
chat = chat.replace('setMessages(prev => [...prev, userMsg])\n    setInput("")', 'setMessages(prev => [...prev, userMsg])\n    setInput("")\n    trackEvent("ai_chat_messages")');

fs.writeFileSync(path, chat);
