import { Link } from "gatsby"
import React from "react"

type LinkNavigationProps = {
  to: string,
  children : React.ReactNode
}

export default function LinkNavigation({ to ,children}: LinkNavigationProps) {
  return <Link to={to}>
      <span className="text-blue-800 font-bold text-base">
            {children}
      </span>
  </Link>
}
