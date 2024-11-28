import Image from '../../assets/ultrassom-de-tireoide-1.jpg'

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

export const UltrassomTireoide = () => {
  return (
    <ContainerUltradelivery>
      <BannerServices nameServices="Ultrassom de Tireoide" />
      <ContainerServices>
        <ContentText>
          <TitleText size="l">
            O que é <br /> <span> Ultrassom de Tireoide?</span>
          </TitleText>
          <TextRegular>
            Descubra uma maneira segura e acessível de monitorar sua tireoide
            sem sair de casa. Com o Ultrassom de Tireoide, oferecemos uma
            avaliação detalhada e precisa da saúde da sua glândula tireoide,
            tudo isso no conforto do seu lar.
          </TextRegular>
          <TextRegular>
            Nossa tecnologia avançada permite uma visualização clara e minuciosa
            da tireoide, identificando qualquer irregularidade de forma precoce
            e precisa. Além disso, nosso exame é realizado com o máximo de
            conforto e cuidado, garantindo sua tranquilidade durante todo o
            processo
          </TextRegular>
          <TextRegular>
            Não deixe a saúde da sua tireoide em segundo plano. Agende agora
            mesmo o seu Ultrassom de Tireoide domiciliar e tenha a certeza de
            estar no controle da sua saúde glandular. Sua saúde e bem-estar são
            nossa prioridade.
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
