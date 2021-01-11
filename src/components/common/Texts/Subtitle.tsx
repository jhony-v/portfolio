import React from "react"

export default function Subtitle({ children }: { children: React.ReactNode }) {
  return <span className="font-bold flex text-green-400">{children}</span>
}
