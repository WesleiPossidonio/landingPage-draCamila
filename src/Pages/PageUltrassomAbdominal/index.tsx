import Image from '../../assets/ultrassom-abdome-total.jpg'

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

export const UltrassomAbdominal = () => {
  return (
    <ContainerUltradelivery>
      <BannerServices nameServices="Ultrassom Abdominal" />
      <ContainerServices>
        <ContentText>
          <TitleText size="l">
            O que é <br /> <span> Ultrassom Abdominal?</span>
          </TitleText>
          <TextRegular>
            O ultrassom abdominal permite visualizar os órgãos internos em tempo
            real, fornecendo informações detalhadas sobre sua estrutura e
            função, identificando anomalias como tumores, cistos, cálculos,
            inflamações, obstruções.
          </TextRegular>
          <TextRegular>
            É importante destacar, que nas patologias das Vias Biliares, é um
            método diagnóstico de escolha inicial que apresenta alta
            especificidade e sensibilidade. Por ser livre de radiação, é seguro
            para os pacientes de todas as idades, e tem como benefício auxiliar
            na prevenção e detecção precoce de doenças hepáticas, renais e
            pancreáticas
          </TextRegular>
          <TextRegular>
            Sua saúde merece toda a atenção que você pode dar. Agende agora o
            seu Ultrassom Abdominal e dê um passo à frente no cuidado com o seu
            corpo.
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
