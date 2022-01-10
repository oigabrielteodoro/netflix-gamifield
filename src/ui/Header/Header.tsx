import React from 'react'

import { Search } from './Search'

import * as S from './Header.styled'

export function Header() {
  return (
    <S.Container>
      <S.Column>
        <button>Previous</button>
        <button>Next</button>
        <Search />
      </S.Column>
      <S.Column>
        <button>Notifications</button>
        <button>Messages</button>
        <img
          src='https://github.com/oigabrielteodoro.png'
          alt='Avatar'
          width={55}
          height={55}
        />
      </S.Column>
    </S.Container>
  )
}
