import { Link } from "gatsby"
import React from "react"

type LinkNavigationProps = {
  to: string,
  children : React.ReactNode,
  onClick ?: (e : React.MouseEvent) => void;
  className ?: string;
}

export default function LinkNavigation({ to ,children,onClick, className}: LinkNavigationProps) {
  return <Link to={to} onClick={onClick}>
      <span className={className}>
            {children}
      </span>
  </Link>
}
