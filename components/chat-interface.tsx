"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { useChat } from "@/components/chat-context"

interface Message {
  id: string
  role: "user" | "ai"
  content: string
}

export function ChatInterface() {
  const { isOpen, setIsOpen } = useChat()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "ai",
      content: "Ask me anything about Karim! I'm his AI Twin."
    }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isLoading])

  const handleSubmit = async (e: React.FormEvent) => {
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
      const response = await fetch("https://api.mistral.ai/v1/conversations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer 8xF7806sb3OwDZOAEgLXbNZmC5PB2GmG`
        },
        body: JSON.stringify({
          agent_id: "ag\\019cc748e87670b39388733f6a2500a9",
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

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-500 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
        aria-label="Open Chat"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-40"></span>
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
            className="fixed bottom-6 right-6 z-50 flex h-[500px] w-[350px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 sm:w-[400px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Karim's AI Twin</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 scroll-smooth">
              <div className="flex flex-col gap-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex max-w-[80%] gap-2 ${
                        msg.role === "user" ? "flex-row-reverse" : "flex-row"
                      }`}
                    >
                      <div
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full mt-1 ${
                          msg.role === "user"
                            ? "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                            : "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"
                        }`}
                      >
                        {msg.role === "user" ? <User size={12} /> : <Bot size={12} />}
                      </div>
                      <div
                        className={`rounded-2xl px-4 py-2 text-sm ${
                          msg.role === "user"
                            ? "bg-blue-600 text-white rounded-tr-none"
                            : "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 rounded-tl-none"
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex w-full justify-start">
                    <div className="flex max-w-[80%] gap-2 flex-row">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full mt-1 bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                        <Bot size={12} />
                      </div>
                      <div className="rounded-2xl px-4 py-2 text-sm bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 rounded-tl-none flex items-center gap-1 h-9">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 dark:bg-slate-500" style={{ animationDelay: "0ms" }}></span>
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 dark:bg-slate-500" style={{ animationDelay: "150ms" }}></span>
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 dark:bg-slate-500" style={{ animationDelay: "300ms" }}></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-blue-400 dark:focus:ring-blue-400"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600"
                >
                  <Send size={16} className="ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
