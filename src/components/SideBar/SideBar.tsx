import React from 'react'
import { AiOutlineCompass, AiOutlineLogout } from 'react-icons/ai'
import { RiHeart2Line } from 'react-icons/ri'
import { FiMonitor, FiSettings, FiUser, FiUsers } from 'react-icons/fi'

import { Avatar, Logo } from 'components'
import { POPCORN_ICON } from 'assets'

import { NavItem } from './NavItem'
import * as S from './SideBar.styled'

export function SideBar() {
  return (
    <S.Container>
      <Logo />
      <S.AccountContainer>
        <S.AccountBanner
          src='https://pbs.twimg.com/profile_banners/1120580353708711936/1561665658/600x200'
          alt='Account Banner'
        />
        <S.AccountAvatarContainer>
          <Avatar
            progress={50}
            src='https://github.com/oigabrielteodoro.png'
            alt='Account'
          />
        </S.AccountAvatarContainer>
        <strong>Gabriel Teodoro</strong>
        <p>@oigabrielteodoro</p>
      </S.AccountContainer>
      <S.NavigationContainer>
        <h1>Menu</h1>
        <ul>
          <NavItem to='/' icon={AiOutlineCompass}>
            Browse
          </NavItem>
          <NavItem to='/watchlist' icon={RiHeart2Line}>
            Watchlist
          </NavItem>
          <NavItem to='/coming-soon' icon={FiMonitor}>
            Coming soon
          </NavItem>
        </ul>
        <h1>Social</h1>
        <ul>
          <NavItem to='/friends' icon={FiUser}>
            Friends
          </NavItem>
          <NavItem to='/parties' icon={FiUsers}>
            Parties
          </NavItem>
        </ul>
        <h1>General</h1>
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
