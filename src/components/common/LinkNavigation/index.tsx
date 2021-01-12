import { Link } from "gatsby"
import React from "react"

type LinkNavigationProps = {
  to: string,
  children : React.ReactNode,
  onClick ?: () => void;
  className ?: string;
}

export default function LinkNavigation({ to ,children,onClick, className}: LinkNavigationProps) {
  return <Link to={to}>
      <span className={className} onClick={onClick}>
            {children}
      </span>
  </Link>
}
