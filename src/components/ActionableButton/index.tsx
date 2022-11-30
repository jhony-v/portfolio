import { ComponentPropsWithRef } from '@react-spring/types'
import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: linear-gradient(
    150deg,
    var(--secondary-color) 40%,
    var(--tertiary-color) 90%
  );
`

const ActionableButton: FC<
  PropsWithChildren<ComponentPropsWithRef<'button'>>
> = ({ children, className, ...restProps }) => {
  const classNames = clsx(className, 'py-4 px-12 text-white shadow-lg')

  return (
    <Button className={classNames} {...restProps}>
      {children}
    </Button>
  )
}

export default ActionableButton
