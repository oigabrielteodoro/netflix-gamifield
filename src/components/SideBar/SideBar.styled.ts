import { theme } from 'config'
import styled from 'styled-components'

export const Container = styled.aside`
  padding: 4rem;
  position: fixed;
  border-right: 0.1rem solid ${theme.colors.neutral[700]};
  min-width: 30rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const AccountContainer = styled.section`
  position: relative;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;

  strong {
    color: ${theme.colors.white};
    margin-top: 1.3rem;
    margin-left: 9rem;
  }

  p {
    color: ${theme.colors.neutral[500]};
    font-size: ${theme.font.sizes.small};
    margin-top: 0.4rem;
    margin-left: 9rem;
  }
`

export const AccountBanner = styled.img`
  border-radius: 1.6rem;
  width: 30rem;
  height: 10rem;
`

export const AccountAvatarContainer = styled.div`
  position: absolute;
  left: 2.2rem;
  top: 8rem;
`

export const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;

  h1 {
    color: ${theme.colors.neutral[600]};
    font-weight: 500;
    font-size: ${theme.font.sizes.small};
    margin-bottom: 2.5rem;

    & + ul + h1 {
      margin-top: 3.6rem;
    }
  }
`

export const ChallengeContainer = styled.section`
  position: relative;
  background: ${theme.colors.neutral[900]};
  border-radius: 1.6rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  margin-top: auto;

  button {
    font-weight: 600;
    font-size: ${theme.font.sizes.small};
    background: ${theme.colors.neutral[600]};
    color: ${theme.colors.white};
    border-radius: 1.6rem;
    padding: 1.8rem;
    transition: 300ms;
    border: 0;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const ChallengeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 2.5rem 0;

  span {
    color: ${theme.colors.white};
    font-weight: 600;
  }

  p {
    color: ${theme.colors.neutral[500]};
    font-size: ${theme.font.sizes.small};
    margin-top: 0.4rem;
  }
`

export const PopcornIcon = styled.div`
  position: absolute;
  background: ${theme.colors.blue[700]};
  padding: 0.8rem;
  border-radius: 1.6rem;
  top: -3rem;
  align-self: center;

  img {
    width: 3.2rem;
    height: 3.2rem;
  }
`
