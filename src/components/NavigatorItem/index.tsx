import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, ReactNode } from 'react'

type NavigatorItemProps = {
  to: string
  text?: string
  icon?: ReactNode
}

const NavigatorItem: FC<NavigatorItemProps> = (props) => {
  const { to, icon, text } = props
  const { asPath } = useRouter()
  const isActive = asPath === to

  const classNames = clsx(
    'flex items-center justify-center font-bold',
    isActive && 'text-white',
    !isActive && 'text-primary-lighter'
  )

  return (
    <Link href={to} passHref>
      <a className={classNames}>
        {text}
        {icon && (
          <span className="block py-1 sm:py-2 lg:py-3 sm:cursor-pointer">
            {icon}
          </span>
        )}
      </a>
    </Link>
  )
}

export default NavigatorItem
