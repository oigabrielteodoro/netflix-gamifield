import React from 'react'
import {
  FiChevronLeft,
  FiChevronRight,
  FiBell,
  FiMessageCircle,
} from 'react-icons/fi'

import { Avatar } from 'ui'

import { Search } from './Search'

import * as S from './Header.styled'

export function Header() {
  return (
    <S.Container>
      <S.Column>
        <S.Icon>
          <FiChevronLeft size={24} />
        </S.Icon>
        <S.Icon disabled>
          <FiChevronRight size={24} />
        </S.Icon>
        <Search />
      </S.Column>
      <S.Column>
        <S.Icon bullet>
          <FiBell size={24} />
        </S.Icon>
        <S.Icon>
          <FiMessageCircle size={24} />
        </S.Icon>
        <S.AccountContainer>
          <Avatar src='https://github.com/oigabrielteodoro.png' alt='Avatar' />
          <S.AccountInfoContainer>
            <strong>Gabriel T.</strong>
            <span>Level 12</span>
          </S.AccountInfoContainer>
        </S.AccountContainer>
      </S.Column>
    </S.Container>
  )
}
