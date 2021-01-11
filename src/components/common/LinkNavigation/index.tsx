import { Link } from "gatsby"
import React from "react"

type LinkNavigationProps = {
  to: string,
  children : React.ReactNode,
  onClick ?: () => void;
}

export default function LinkNavigation({ to ,children,onClick}: LinkNavigationProps) {
  return <Link to={to}>
      <span className="text-blue-800 font-bold text-base" onClick={onClick}>
            {children}
      </span>
  </Link>
}
