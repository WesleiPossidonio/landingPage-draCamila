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
import { useLocation, useNavigate } from 'react-router-dom'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [stateBackgroundHeader, setStateBackgroundHeader] =
    useState<boolean>(false)

  const navigate = useNavigate()
  const location = useLocation()

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

  // Função para navegação e manipulação de âncoras
  const handleNavigate = (path: string) => {
    if (location.pathname !== '/') {
      navigate(`/${path}`)
    } else {
      window.location.hash = path
    }
    if (isOpen) handleStateMenuMobile()
  }

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
        <NavLink
          stateHeader={stateBackgroundHeader}
          onClick={() => handleNavigate('#home')}
        >
          Home
        </NavLink>
        <NavLink
          stateHeader={stateBackgroundHeader}
          onClick={() => handleNavigate('#about')}
        >
          Sobre Mim
        </NavLink>

        <NavLink
          stateHeader={stateBackgroundHeader}
          onClick={() => handleNavigate('#services')}
        >
          Serviços
        </NavLink>
        <NavLink
          stateHeader={stateBackgroundHeader}
          onClick={() => navigate('/contatos')}
        >
          Contatos
        </NavLink>
        <Button bgColor="secundary-bg" btnLarge={false}>
          <NavLink stateHeader={stateBackgroundHeader} href="#" target="_blank">
            Laudo Online
          </NavLink>
        </Button>
      </NavDesktop>

      <NavMobile isOpen={isOpen}>
        <NavLinkMobile onClick={() => handleNavigate('#home')}>
          Home
        </NavLinkMobile>

        <NavLinkMobile onClick={() => handleNavigate('#about')}>
          Sobre Mim
        </NavLinkMobile>

        <NavLinkMobile onClick={() => handleNavigate('#services')}>
          Serviços
        </NavLinkMobile>

        <NavLinkMobile onClick={() => navigate('/contatos')}>
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
