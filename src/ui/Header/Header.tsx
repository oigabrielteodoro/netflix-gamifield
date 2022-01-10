import React from 'react'
import {
  FiChevronLeft,
  FiChevronRight,
  FiBell,
  FiMessageCircle,
} from 'react-icons/fi'
import { useNavigate } from 'react-router'

import { Avatar } from 'ui'

import { Search } from './Search'

import * as S from './Header.styled'

export function Header() {
  const navigate = useNavigate()

  return (
    <S.Container aria-label='Header'>
      <S.Column>
        <S.Icon aria-label='Previous' onClick={() => navigate(-1)}>
          <FiChevronLeft size={24} />
        </S.Icon>
        <S.Icon aria-label='Next' onClick={() => navigate(1)}>
          <FiChevronRight size={24} />
        </S.Icon>
        <Search />
      </S.Column>
      <S.Column>
        <S.Icon aria-label='Notifications' bullet>
          <FiBell size={24} />
        </S.Icon>
        <S.Icon aria-label='Messages'>
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
