import Image from '../../assets/ultrassom-de-mama.jpg'

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

export const UltrassomMamas = () => {
  return (
    <ContainerUltradelivery>
      <BannerServices nameServices="Ultrassom das Mamas" />
      <ContainerServices>
        <ContentText>
          <TitleText size="l">
            O que é <br /> <span> Ultrassom das Mamas?</span>
          </TitleText>
          <TextRegular>
            Imagine um exame que utiliza ondas ultrassônicas para examinar
            detalhadamente suas mamas, identificando possíveis problemas
            precocemente, sem desconforto e sem radiação. É a segurança e a
            confiança que você merece, tudo feito no conforto do seu lar.
          </TextRegular>
          <TextRegular>
            Não espere mais para cuidar da saúde das suas mamas. Agende agora
            mesmo o seu exame de Ultrassom Mamário em domicílio e embarque na
            jornada para uma vida com mais tranquilidade! Sua saúde merece esse
            cuidado especial.
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
