import Image from '../../assets/ultrassom-geral-1.jpg'

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

export const UltrassomGeral = () => {
  return (
    <ContainerUltradelivery>
      <BannerServices nameServices="Ultrassom Geral" />
      <ContainerServices>
        <ContentText>
          <TitleText size="l">
            O que é <br /> <span> Ultrassom Geral? </span>
          </TitleText>
          <TextRegular>
            Imagine ter acesso imediato a um panorama completo da sua saúde, sem
            sair do conforto do seu lar. Com o Ultrassom Geral, você pode
            explorar os segredos do seu corpo, identificando potenciais
            problemas como tumores, inflamações e outras condições, de forma
            rápida e conveniente
          </TextRegular>
          <TextRegular>
            Não se trata apenas de um exame comum; é sobre garantir
            tranquilidade. Utilizando tecnologia de última geração e um método
            seguro, livre de radiação,
          </TextRegular>
          <TextRegular>
            Não permita que preocupações com a saúde limitem sua qualidade de
            vida. Agende seu Ultrassom Geral para ser realizado em casa e dê um
            passo firme em direção a uma vida plena de bem-estar e vitalidade.
            sem que você precise se preocupar em sair de casa.
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
