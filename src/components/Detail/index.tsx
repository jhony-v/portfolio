import { FC, ReactNode } from 'react'

type DetailProps = {
  title: string
  subtitle?: string
  children: ReactNode
}

const Detail: FC<DetailProps> = ({ title, subtitle, children }) => {
  return (
    <section className="p-3 rounded-lg">
      <h1 className="text-3xl md:text-5xl font-mono text-white">{title}</h1>
      {subtitle && <p className="text-gray-500">{subtitle}</p>}
      <div className="mt-10 w-full text-white">{children}</div>
    </section>
  )
}

export default Detail
