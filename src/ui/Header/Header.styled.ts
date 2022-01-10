import styled, { css } from 'styled-components'
import { theme } from 'config'

type IconProps = {
  bullet?: boolean
}

export const Container = styled.header`
  margin-left: 30rem;
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Column = styled.section`
  display: flex;
  align-items: center;
`

export const Icon = styled.button<IconProps>`
  background: ${theme.colors.neutral[700]};
  border: 0;
  transition: 300ms;
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 1rem;
  display: grid;
  place-items: center;

  ${({ bullet }) =>
    bullet &&
    css`
      position: relative;

      &::after {
        content: '';
        position: absolute;
        background: ${theme.colors.red[500]};
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        top: -0.2rem;
        right: -0.2rem;
      }
    `}

  & + button {
    margin-left: 1.2rem;
  }

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    svg {
      color: ${theme.colors.neutral[500]};
    }
  }

  svg {
    color: ${theme.colors.neutral[400]};
  }
`

export const AccountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2.4rem;
  background: transparent;
  border: 0;
  transition: 300ms;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`

export const AccountInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1.8rem;

  strong {
    font-weight: 500;
    font-size: 1.4rem;
    color: ${theme.colors.white};
  }

  span {
    font-size: 1.2rem;
    margin-top: 0.4rem;
    color: ${theme.colors.neutral[400]};
  }
`
