import { useEffect, useState } from 'react'

import Logo from '../../assets/logo2.svg'

import {
  ContainerHeaderMenu,
  ImgLogo,
  NavDesktop,
  NavLink,
  NavLinkMobile,
  NavMobile,
} from './styled'
import { List, X } from '@phosphor-icons/react'
import { Button } from '../Button'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [stateBackgroundHeader, setStateBackgroundHeader] =
    useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY

      if (scrollTop > 50) {
        setStateBackgroundHeader(true)
      } else {
        setStateBackgroundHeader(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleStateMenuMobile = () => {
    setIsOpen((open: boolean) => !open)
  }

  return (
    <ContainerHeaderMenu stateHeader={stateBackgroundHeader}>
      <NavLink stateHeader={stateBackgroundHeader} href="#home">
        <ImgLogo src={Logo} />
      </NavLink>

      {isOpen ? (
        <X size={35} weight="bold" onClick={handleStateMenuMobile} />
      ) : (
        <List size={35} weight="bold" onClick={handleStateMenuMobile} />
      )}

      <NavDesktop>
        <NavLink stateHeader={stateBackgroundHeader} href="#home">
          Home
        </NavLink>
        <NavLink stateHeader={stateBackgroundHeader} href="#about">
          Sobre Mim
        </NavLink>

        <NavLink stateHeader={stateBackgroundHeader} href="#services">
          Serviços
        </NavLink>
        <NavLink stateHeader={stateBackgroundHeader} href="#contact">
          Contatos
        </NavLink>
        <Button bgColor="secundary-bg" btnLarge={false}>
          <NavLink stateHeader={stateBackgroundHeader} href="#" target="_blank">
            Laudo Online
          </NavLink>
        </Button>
      </NavDesktop>

      <NavMobile isOpen={isOpen}>
        <NavLinkMobile href="#home" onClick={handleStateMenuMobile}>
          Home
        </NavLinkMobile>

        <NavLinkMobile href="#about" onClick={handleStateMenuMobile}>
          Sobre Mim
        </NavLinkMobile>

        <NavLinkMobile href="#principes" onClick={handleStateMenuMobile}>
          Serviços
        </NavLinkMobile>

        <NavLinkMobile href="#Contatos" onClick={handleStateMenuMobile}>
          Contatos
        </NavLinkMobile>

        <Button bgColor="secundary-bg" btnLarge={false}>
          <NavLink stateHeader={stateBackgroundHeader} href="#" target="_blank">
            Laudo Online
          </NavLink>
        </Button>
      </NavMobile>
    </ContainerHeaderMenu>
  )
}
