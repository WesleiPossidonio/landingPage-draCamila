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

export const UltraDelivery = () => {
  return (
    <ContainerUltradelivery>
      <BannerServices nameServices="Ultra Delivery" />
      <ContainerServices>
        <ContentText>
          <TitleText size="l">
            O que é <br /> <span> Ultra Delivery? </span>
          </TitleText>
          <TextRegular>
            No Ultra Delivery, o médico solicitante informa o tipo de ultrassom
            e a queixa do paciente, e nós agendamos o exame no horário ideal,
            garantindo um atendimento personalizado e eficiente
          </TextRegular>
          <TextRegular>
            <strong>Exames direcionados:</strong> Seu médico nos fornece as
            informações necessárias, e nós garantimos um agendamento rápido e
            eficiente para atender às suas necessidades.
          </TextRegular>
          <TextRegular>
            <strong>Tecnologia de alta precisão:</strong> Nosso ultrassom
            dermatológico é ideal para avaliar tumores, inflamações, doenças
            vasculares e complicações estéticas, com resultados claros e
            confiáveis.
          </TextRegular>
          <TextRegular>
            <strong>Cuidado e segurança:</strong> Com foco na sua comodidade,
            oferecemos uma experiência de saúde de qualidade e totalmente
            alinhada às suas expectativas.
          </TextRegular>
        </ContentText>

        <ImagePages linkImg={Image} />
      </ContainerServices>
      <CallActionServices />
      <Steps />
      <ContactServices />{' '}
      {/*acrescentar o assunto para enviar ao email via props */}
    </ContainerUltradelivery>
  )
}
