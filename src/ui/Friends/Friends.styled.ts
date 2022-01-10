import styled, { css } from 'styled-components'
import { theme } from 'config'

type AccountItemProps = {
  online?: boolean
}

export const Container = styled.aside`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  background: ${theme.colors.neutral[900]};
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    margin-top: 5rem;
  }
`

export const AddButton = styled.button`
  background: ${theme.colors.red[500]};
  border-radius: 50%;
  height: 4.5rem;
  width: 4.5rem;
  border: 0;
  box-shadow: 0 1rem 2.5rem ${theme.colors.red[800]};

  svg {
    color: ${theme.colors.white};
  }
`

export const AccountItem = styled.li<AccountItemProps>`
  ${({ online }) =>
    online &&
    css`
      position: relative;

      &::after {
        content: '';
        position: absolute;
        background: ${theme.colors.green[200]};
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        top: 0;
        right: 0;
      }
    `}

  & + li {
    margin-top: 2rem;
  }

  img {
    width: 4.2rem;
    height: 4.2rem;
  }
`
