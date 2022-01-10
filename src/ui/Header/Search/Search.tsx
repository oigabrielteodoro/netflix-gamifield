import React, { useRef } from 'react'
import { FiSearch } from 'react-icons/fi'

import { theme } from 'config'

import * as S from './Search.styled'

export function Search() {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <S.Container onClick={() => inputRef.current?.focus()}>
      <FiSearch size={24} color={theme.colors.neutral[500]} />
      <input aria-label='Search' ref={inputRef} placeholder='Search...' />
    </S.Container>
  )
}
