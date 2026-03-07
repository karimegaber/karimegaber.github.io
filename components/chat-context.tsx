"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface ChatContextType {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  openChat: () => void
  closeChat: () => void
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ChatContext.Provider value={{ isOpen, setIsOpen, openChat: () => setIsOpen(true), closeChat: () => setIsOpen(false) }}>
      {children}
    </ChatContext.Provider>
  )
}

export function useChat() {
  const context = useContext(ChatContext)
  if (!context) throw new Error("useChat must be used within a ChatProvider")
  return context
}
