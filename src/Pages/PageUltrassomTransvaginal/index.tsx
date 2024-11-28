import Image from '../../assets/ultrassom-transvaginal.jpg'

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

export const UltrassomTransvaginal = () => {
  return (
    <ContainerUltradelivery>
      <BannerServices nameServices="Ultrassom Transvaginal" />
      <ContainerServices>
        <ContentText>
          <TitleText size="l">
            O que é <br /> <span> Ultrassom Transvaginal?</span>
          </TitleText>
          <TextRegular>
            Imagine uma abordagem delicada e precisa para avaliar sua saúde
            íntima, tudo sem sair de casa. Com o Ultrassom Transvaginal,
            oferecemos uma maneira segura e conveniente de monitorar sua saúde
            ginecológica.
          </TextRegular>
          <TextRegular>
            Nossa tecnologia avançada proporciona uma visão detalhada e clara do
            seu sistema reprodutivo, permitindo identificar qualquer anomalia
            com precisão e rapidez. Além disso, nosso exame é realizado com
            cuidado e conforto para garantir sua tranquilidade.
          </TextRegular>
          <TextRegular>
            Não espere mais para cuidar da sua saúde íntima. Agende agora mesmo
            o seu Ultrassom Transvaginal domiciliar e tenha a certeza de estar
            no controle da sua saúde ginecológica. Sua saúde e bem-estar são
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
