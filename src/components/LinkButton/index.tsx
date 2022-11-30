import { FC } from 'react'

type LinkButtonProps = {
  href: string
  text: string
}

const LinkButton: FC<LinkButtonProps> = ({ href, text }) => {
  return (
    <a
      className="text-base rounded-2xl inline-block bg-primary p-1 text-white"
      target={'_blank'}
      href={href}
      rel="noreferrer"
    >
      {text}
    </a>
  )
}

export default LinkButton
