import Image from '../../assets/ultrassom-parede-abdominal-1.jpg'

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

export const UltrassomPelvicaViaAbdominal = () => {
  return (
    <ContainerUltradelivery>
      <BannerServices nameServices="Ultrassom Pélvica via Abdominal" />
      <ContainerServices>
        <ContentText>
          <TitleText size="l">
            O que é <br /> <span> Ultrassom Pélvica via Abdominal?</span>
          </TitleText>
          <TextRegular>
            Imagine ter acesso imediato a uma imagem clara e detalhada dos seus
            órgãos internos, permitindo a detecção precoce de problemas como
            tumores, cistos e obstruções, tudo feito no conforto do seu lar.
          </TextRegular>
          <TextRegular>
            Oferecemos mais do que um simples exame; oferecemos tranquilidade.
            Com nossa tecnologia de ponta e procedimento seguro, livre de
            radiação, você pode cuidar da sua saúde pélvica com confiança em
            qualquer idade, sem precisar sair de casa.
          </TextRegular>

          <TextRegular>
            Não permita que preocupações com a saúde pélvica afetem sua
            qualidade de vida. Agende seu Ultrassom Pélvica Abdominal para ser
            realizado em casa hoje mesmo e dê um passo em direção a uma vida
            plena de bem-estar e vitalidade.
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
