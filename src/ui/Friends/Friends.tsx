import React from 'react'
import { FiPlus } from 'react-icons/fi'

import { Avatar } from 'ui'

import * as S from './Friends.styled'

export function Friends() {
  return (
    <S.Container>
      <S.AddButton>
        <FiPlus size={24} />
      </S.AddButton>
      <ul>
        {[0, 1, 2, 3, 4, 5, 6].map((friend) => (
          <S.AccountItem
            key={friend}
            online={Boolean(Math.round(Math.random()))}
          >
            <Avatar
              src='https://github.com/oigabrielteodoro.png'
              alt='Giovanna Linda'
            />
          </S.AccountItem>
        ))}
      </ul>
    </S.Container>
  )
}
