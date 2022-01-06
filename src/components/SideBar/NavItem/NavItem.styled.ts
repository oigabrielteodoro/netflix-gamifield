import styled, { css } from 'styled-components'
import { theme } from 'config'

type ContainerProps = {
  active: boolean
}

export const IconContainer = styled.div`
  border-radius: 0.3rem;
  display: grid;
  place-items: center;
  margin-right: 1.6rem;
  transition: 300ms;
`

export const Container = styled.li<ContainerProps>`
  position: relative;

  & + li {
    margin-top: 2rem;
  }

  a {
    display: flex;
    align-items: center;
    color: ${theme.colors.neutral[500]};
    transition: 300ms;
    font-weight: 500;

    &:hover {
      color: ${theme.colors.white};

      ${IconContainer} {
        color: ${theme.colors.red[500]};
      }
    }

    ${({ active }) =>
      active &&
      css`
        color: ${theme.colors.white};

        &::before {
          content: '';
          position: absolute;
          background: ${theme.colors.red[500]};
          left: -4rem;
          height: 100%;
          width: 0.3rem;
          border-radius: 0 0.1rem 0.1rem 0;
        }

        ${IconContainer} {
          color: ${theme.colors.red[500]};
        }
      `}
  }
`
