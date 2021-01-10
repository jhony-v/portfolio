import React from "react"
import { Helmet } from "react-helmet"

type SEOProps = {
  children: React.ReactNode
  title?: string
  description?: string
}

export default function SEO({ children, title, description }: SEOProps) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Helmet>
      {children}
    </>
  )
}
