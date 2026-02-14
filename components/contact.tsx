"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Send, Mail, Phone, Linkedin, User, MessageSquare, Loader2 } from "lucide-react"
import emailjs from "@emailjs/browser"

interface ChatMessage {
  from: "user" | "karim"
  text: string
}

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      from: "karim",
      text: "Always down to connect with fellow devs or discuss new opportunities. Drop me a message and I’ll get back to you as soon as I can!",
    },
  ])
  const [sent, setSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return

    setIsLoading(true)

    // Format WhatsApp Link
    const cleanNumber = whatsapp.replace(/[^0-9]/g, "")
    const waLink = cleanNumber ? `https://wa.me/${cleanNumber}` : "Not provided"

    // Prepare data for EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      whatsapp_number: whatsapp || "Not provided",
      whatsapp_link: waLink,
      message: message,
      to_email: "dev.karime.gaber@gmail.com",
    }

    try {
      await emailjs.send(
        "service_gfwxd16",
        "template_lrkk4qa",
        templateParams,
        "JQouenGM5_iyBp1ky"
      )

      // Only update UI if email sends successfully
      setMessages((prev) => [
        ...prev,
        { from: "user", text: message },
        {
          from: "karim",
          text: `Thanks ${name}! I've received your message and will get back to you as soon as I can. Talk soon!`,
        },
      ])
      
      setName("")
      setEmail("")
      setWhatsapp("")
      setMessage("")
      setSent(true)
    } catch (error) {
      console.error("Failed to send email:", error)
      alert("Something went wrong. Please check your console or try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-blue-400">
            Get in Touch
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            {"Let's Connect"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="mb-4 text-base font-semibold text-white">Contact Details</h3>
              <div className="space-y-4">
                <a
                  href="mailto:dev.karime.gaber@gmail.com"
                  className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-blue-400"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-800">
                    <Mail size={16} />
                  </div>
                  dev.karime.gaber@gmail.com
                </a>
                <a
                  href="tel:+971504626400"
                  className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-blue-400"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-800">
                    <Phone size={16} />
                  </div>
                  +971 50 462 6400
                </a>
                <a
                  href="https://wa.me/971504626400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-blue-400"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-800">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  WhatsApp
                </a>
                <a
                  href="http://linkedin.com/in/karimessamgaber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-blue-400"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-800">
                    <Linkedin size={16} />
                  </div>
                  Karim Essam Gaber
                </a>
              </div>
            </div>
          </motion.div>

          {/* Chat-style contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 lg:col-span-3"
          >
            {/* Chat header */}
            <div className="flex items-center gap-3 border-b border-slate-800 px-5 py-3">
              <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-blue-500/30 bg-blue-500/10">
                <Image
                  src="/images/website-icon.png"
                  alt="Karim Gaber"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Karim Gaber</p>
                <p className="flex items-center gap-1 text-xs text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Online
                </p>
              </div>
              <MessageSquare size={16} className="ml-auto text-slate-600" />
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto p-5" style={{ minHeight: 200 }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "bg-blue-500 text-white"
                        : "border border-slate-800 bg-slate-800/60 text-slate-300"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input form */}
            <form onSubmit={handleSubmit} className="border-t border-slate-800 p-4">
              {!sent && (
                <div className="mb-3 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" />
                      <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg border border-slate-800 bg-slate-800/50 py-2 pl-9 pr-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-blue-500/50"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" />
                      <input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-slate-800 bg-slate-800/50 py-2 pl-9 pr-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-blue-500/50"
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-600"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="WhatsApp (Optional)"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full rounded-lg border border-slate-800 bg-slate-800/50 py-2 pl-9 pr-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-blue-500/50"
                      disabled={isLoading}
                    />
                  </div>
                </div>
              )}
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder={sent ? "Send another message..." : "Type your message..."}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value)
                    if (sent) setSent(false)
                  }}
                  className="w-full rounded-lg border border-slate-800 bg-slate-800/50 px-4 py-2 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-blue-500/50"
                  required
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  {isLoading ? (
                     <>
                      <span>Sending...</span>
                      <Loader2 size={16} className="animate-spin" />
                     </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}