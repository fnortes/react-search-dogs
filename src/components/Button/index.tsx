import React, { FC, ReactChild, ReactChildren } from 'react'
import { Link } from 'wouter'

interface Props {
  href?: string
  children: ReactChild | ReactChildren
}

const Button: FC<Props> = ({ children, href }) => {
  return href ? (
    <Link href={href}>{children}</Link>
  ) : (
    <button>{children}</button>
  )
}

export default Button
