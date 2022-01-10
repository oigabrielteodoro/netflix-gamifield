import styled from 'styled-components'
import { theme } from 'config'

export const Container = styled.div`
  border-radius: 1.6rem;
  padding: 1.2rem 2rem;
  border: 0.2rem solid ${theme.colors.neutral[500]};
  display: flex;
  align-items: center;
  width: 30rem;
  cursor: text;
  transition: 300ms;
  margin-left: 2.4rem;

  &:hover {
    border: 0.2rem solid ${theme.colors.neutral[400]};
  }

  input {
    border: 0;
    background: transparent;
    margin-left: 1.6rem;
    font-size: 1.4rem;
    color: ${theme.colors.neutral[400]};
    flex: 1;

    &::placeholder {
      font-size: 1.4rem;
      color: ${theme.colors.neutral[500]};
    }
  }
`
