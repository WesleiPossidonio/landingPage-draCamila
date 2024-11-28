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

export const UltrassomDopler = () => {
  return (
    <ContainerUltradelivery>
      <BannerServices nameServices="Ultrassom Dopler" />
      <ContainerServices>
        <ContentText>
          <TitleText size="l">
            O que é <br /> <span> Ultrassom Dopler?</span>
          </TitleText>
          <TextRegular>
            Imagine uma abordagem avançada e precisa para avaliar a circulação
            sanguínea, tudo sem sair de casa. Com o Ultrassom Doppler,
            oferecemos uma maneira segura e conveniente de avaliar o fluxo
            sanguíneo e diagnosticar condições vasculares.
          </TextRegular>
          <TextRegular>
            Nossa tecnologia de ponta proporciona uma visualização detalhada e
            clara do fluxo sanguíneo em suas artérias e veias, permitindo
            identificar qualquer irregularidade com precisão e rapidez. Além
            disso, nosso exame é realizado com o máximo de conforto e cuidado
            para garantir sua tranquilidade.
          </TextRegular>
          <TextRegular>
            Não espere mais para cuidar da sua saúde vascular. Agende agora
            mesmo o seu Ultrassom Doppler domiciliar e tenha a certeza de estar
            no controle da sua saúde circulatória. Sua saúde e bem-estar são
            nossa prioridade
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
