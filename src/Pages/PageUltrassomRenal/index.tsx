import Image from '../../assets/ultrassom-precosse.jpg'

import {
  BannerServices,
  CallActionServices,
  ContactServices,
  ImagePages,
  Steps,
} from '../../Components'
import { TextRegular, TitleText } from '../../Components/typograph'
import {
  ContainerServices,
  ContainerUltradelivery,
  ContentText,
} from './styled'

export const UltrassomRenal = () => {
  return (
    <ContainerUltradelivery>
      <BannerServices nameServices="Ultrassom Renal" />
      <ContainerServices>
        <ContentText>
          <TitleText size="l">
            O que é <br /> <span> Ultrassom Renal?</span>
          </TitleText>
          <TextRegular>
            O Ultrassom Renal utiliza ondas ultrassônicas para examinar
            detalhadamente seus rins, identificando possíveis problemas
            precocemente, sem desconforto e sem radiação. É a segurança e a
            confiança que você merece, tudo feito no conforto do seu lar.
          </TextRegular>
          <TextRegular>
            Não perca tempo para cuidar da saúde dos seus rins. Agende agora
            mesmo o seu Ultrassom Renal em domicílio e inicie o caminho para uma
            vida com mais tranquilidade e bem-estar! Sua saúde merece toda
            atenção que oferecemos.
          </TextRegular>
        </ContentText>

        <ImagePages linkImg={Image} />
      </ContainerServices>
      <CallActionServices />
      <Steps />
      <ContactServices />{' '}
    </ContainerUltradelivery>
  )
}
