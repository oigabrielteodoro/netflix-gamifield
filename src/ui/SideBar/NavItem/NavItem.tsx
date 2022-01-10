import React, { ComponentType } from 'react'

import { Link } from 'react-router-dom'
import { useResolvedPath, useMatch } from 'react-router'

import type { IconBaseProps } from 'react-icons'

import * as S from './NavItem.styled'

type Props = {
  to: string
  children: string
  icon: ComponentType<IconBaseProps>
}

export function NavItem({ to, icon: Icon, children }: Props) {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  const isActive = !!match

  return (
    <S.Container active={isActive}>
      <Link to={to}>
        <S.IconContainer>
          <Icon size={24} />
        </S.IconContainer>
        <span>{children}</span>
      </Link>
    </S.Container>
  )
}
