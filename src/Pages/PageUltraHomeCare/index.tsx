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

export const UltraHomeCare = () => {
  return (
    <ContainerUltradelivery>
      <BannerServices nameServices="Ultra Home Care" />
      <ContainerServices>
        <ContentText>
          <TitleText size="l">
            O que é <br /> <span> Ultra Home Care?</span>
          </TitleText>
          <TextRegular>
            A ULTRA Home Care é uma inovação e um novo conceito para facilitar a
            sua busca em cuidar de si e da sua saúde
          </TextRegular>
          <TextRegular>
            O método consiste na utilização de um aparelho portátil de ultrassom
            que me possibilita ir até você, no conforto da sua casa, para
            realizar o exame de ultrassonografia e diagnosticar possíveis
            alterações do seu organismo.
          </TextRegular>
          <TextRegular>
            A ULTRA Home Care possibilita um exame ultrassonográfico com melhor
            alinhamento diagnóstico, disponibilizando o resultado poucos dias
            após a realização em uma plataforma On line, com acesso direto para
            os médicos solicitantes e pacientes.
          </TextRegular>
          <TextRegular>
            Desta maneira, otimizamos o seu tempo, a sua rotina, proporcionando
            um serviço personalizado de excelência.
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
