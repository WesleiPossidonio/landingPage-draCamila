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

export const UltrassomObstetricaRenal = () => {
  return (
    <ContainerUltradelivery>
      <BannerServices nameServices="Ultrassom Obstetrica Renal" />
      <ContainerServices>
        <ContentText>
          <TitleText size="l">
            O que é <br /> <span> Ultrassom Obstetrica Renal?</span>
          </TitleText>
          <TextRegular>
            Descubra uma maneira segura e conveniente de cuidar da saúde dos
            seus rins durante a gravidez. Nosso Ultrassom Obstétrico Renal,
            realizado no conforto do seu lar, utiliza tecnologia avançada para
            garantir uma gestação tranquila e saudável.
          </TextRegular>
          <TextRegular>
            Ao agendar o seu exame conosco, você terá acesso a uma avaliação
            detalhada da saúde renal, sem a necessidade de sair de casa. Dessa
            forma, você pode se concentrar no que realmente importa: a chegada
            do seu bebê.
          </TextRegular>
          <TextRegular>
            Não deixe a saúde dos seus rins em segundo plano durante a gestação.
            Reserve agora mesmo o seu Ultrassom Obstétrico Renal domiciliar e
            assegure-se de proporcionar o melhor começo de vida para você e seu
            bebê. Sua saúde e a dele merecem toda a atenção!
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
