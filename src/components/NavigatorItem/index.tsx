import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC, ReactNode } from 'react'

type NavigatorItemProps = {
  to: string
  text?: string
  icon?: ReactNode
}

const NavigatorItem: FC<NavigatorItemProps> = (props) => {
  const { to, icon } = props
  const { asPath } = useRouter()
  const isActive = asPath === to

  const classNames = clsx(
    'flex items-center justify-center',
    isActive && 'text-primary',
    !isActive && 'text-light'
  )

  return (
    <div className={classNames}>
      <Link href={to} passHref>
        <span className="block py-1 sm:py-2 lg:py-3 sm:cursor-pointer">
          {icon}
        </span>
      </Link>
    </div>
  )
}

export default NavigatorItem
