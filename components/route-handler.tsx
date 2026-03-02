"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export function RouteHandler() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Get the redirect path from query params
    const p = searchParams.get("p")

    if (p) {
      // Decode the path
      // Note: decodeURIComponent handles special characters like spaces, @, etc.
      // But we should be careful if the path was already partially decoded or double encoded.
      // The 404.html script does encodeURIComponent(path + search + hash).
      // So a single decodeURIComponent here should restore it correctly.
      try {
          const decodedPath = decodeURIComponent(p)

          // Perform the client-side navigation to the intended route
          // We use router.replace to avoid adding the redirect to history
          // This "recovers" the route lost by the 404
          router.replace(decodedPath)
      } catch (e) {
          console.error("Failed to decode route path:", e)
          router.replace("/")
      }
    }
  }, [router, searchParams])

  return null
}
