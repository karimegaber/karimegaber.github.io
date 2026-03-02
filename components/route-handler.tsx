"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export function RouteHandler() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const p = searchParams.get("p")
    if (p) {
      router.replace(p)
    }
  }, [router, searchParams])

  return null
}
