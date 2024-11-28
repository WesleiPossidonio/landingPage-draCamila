import LogoImg from '../../assets/Logo-Services.svg'
import { Button } from '../Button'
import { TextRegular, TitleText } from '../typograph'

import { ContainerCallAction, ContentText, LogoImage } from './styled'

export const CallActionServices = () => {
  return (
    <ContainerCallAction>
      <LogoImage src={LogoImg} />
      <ContentText>
        <TitleText size="xl">
          Nossos Exames <br /> de <span>Ultrassonografia</span> <br /> Tem
          suporte a Laudos Online
        </TitleText>
        <TextRegular>
          Desvende o Futuro da sua Saúde. Acesse Agora seus Laudos Online!
        </TextRegular>
        <Button bgColor="secundary-bg" btnLarge={false}>
          Marcar Exame!
        </Button>
      </ContentText>
    </ContainerCallAction>
  )
}
