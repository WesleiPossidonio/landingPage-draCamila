import Image from '../../assets/ultrassom-dermatologico-1.jpg'

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

export const UltrassomDermatologico = () => {
  return (
    <ContainerUltradelivery>
      <BannerServices nameServices="Ultrassom Dermatológico" />
      <ContainerServices>
        <ContentText>
          <TitleText size="l">
            O que é <br /> <span> Ultrassom Dermatológico? </span>
          </TitleText>
          <TextRegular>
            Imagine um exame que utiliza ondas ultrassônicas para acordar o seu
            próprio colágeno, deixando sua pele suave, reduzindo rugas e
            proporcionando um efeito lifting natural. E a melhor parte? Sem
            necessidade de cirurgia, sem sair de Casa!
          </TextRegular>
          <TextRegular>
            Não espere mais para ter uma pele deslumbrante. Agende agora mesmo o
            seu exame de Ultrassom Dermatológico em domicílio e embarque na
            jornada para uma beleza radiante! Sua pele merece todo esse cuidado
            especial.
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
