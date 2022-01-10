import React, { ImgHTMLAttributes } from 'react'

import * as S from './Avatar.styled'

type Props = {
  progress?: number
} & ImgHTMLAttributes<HTMLImageElement>

export function Avatar({ ...rest }: Props) {
  return <S.Container {...rest} />
}
