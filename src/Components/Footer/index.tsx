import { Envelope, MapPin, WhatsappLogo } from '@phosphor-icons/react'

import {
  ContainerFooter,
  ContentLinks,
  ImgLogo,
  LinkSite,
  TitleLinks,
} from './styled'

import Logo from '../../assets/logo2.svg'
import { TextRegular, TitleText } from '../typograph'

export const Footer = () => {
  return (
    <ContainerFooter>
      <ContentLinks>
        <ImgLogo src={Logo} />

        <TextRegular color="white" size="sm">
          © 2024. Todos os Direitos Reservados. <br /> Desenvolvido por Weslei
          França
        </TextRegular>
      </ContentLinks>

      <ContentLinks>
        <TitleText color="white">Mapa do Site</TitleText>
        <LinkSite>
          <TextRegular color="white" weight={400}>
            Home
          </TextRegular>
          <TextRegular color="white" weight={400}>
            Sobre Mims
          </TextRegular>
          <TextRegular color="white" weight={400}>
            Serviços
          </TextRegular>
          <TextRegular color="white" weight={400}>
            Contatos
          </TextRegular>
        </LinkSite>
      </ContentLinks>

      <ContentLinks>
        <TitleText color="white">Contatos</TitleText>

        <TitleLinks>
          <WhatsappLogo size={31} color="#fff" />
          <div>
            <TextRegular weight={600}>Whatsapp</TextRegular>
            <TextRegular size="sm" color="white">
              (22) 99930-0802
            </TextRegular>
          </div>
        </TitleLinks>

        <TitleLinks>
          <Envelope size={31} color="#fff" />
          <div>
            <TextRegular weight={600}>Email</TextRegular>
            <TextRegular size="sm" color="white">
              atendimento@camilagaliza.com
            </TextRegular>
          </div>
        </TitleLinks>

        <TitleLinks>
          <MapPin size={31} color="#fff" />
          <div>
            <TextRegular weight={600}> Endereço</TextRegular>
            <TextRegular weight={400}>Macaé-RJ</TextRegular>
          </div>
        </TitleLinks>
      </ContentLinks>
    </ContainerFooter>
  )
}
