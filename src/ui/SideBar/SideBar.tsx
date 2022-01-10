import React from 'react'
import { RiHeart2Line } from 'react-icons/ri'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineCompass, AiOutlineLogout } from 'react-icons/ai'

import { Logo } from 'ui'
import { POPCORN_ICON } from 'assets'

import { NavItem } from './NavItem'
import * as S from './SideBar.styled'

export function SideBar() {
  return (
    <S.Container>
      <Logo />

      <S.NavigationContainer>
        <h1>Menu</h1>
        <ul>
          <NavItem to='/' icon={AiOutlineCompass}>
            Browse
          </NavItem>
          <NavItem to='/watchlist' icon={RiHeart2Line}>
            Watchlist
          </NavItem>
        </ul>
        <h1>Account</h1>
        <ul>
          <NavItem to='/settings' icon={FiSettings}>
            Settings
          </NavItem>
          <NavItem to='/settings' icon={AiOutlineLogout}>
            Log out
          </NavItem>
        </ul>
      </S.NavigationContainer>
      <S.ChallengeContainer>
        <S.PopcornIcon>
          <img src={POPCORN_ICON} alt='Popcorn Icon' />
        </S.PopcornIcon>
        <S.ChallengeTextContainer>
          <span>Popcorn Addcit</span>
          <p>4/6h viewing time</p>
        </S.ChallengeTextContainer>
        <button>View challenges</button>
      </S.ChallengeContainer>
    </S.Container>
  )
}
