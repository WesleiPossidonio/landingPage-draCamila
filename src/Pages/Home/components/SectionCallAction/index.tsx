import { Button } from '../../../../Components'
import { TextRegular, TitleText } from '../../../../Components/typograph'
import { ContainerCallAction, ContentCallAction } from './styled'

export const CallAction = () => {
  return (
    <ContainerCallAction>
      <ContentCallAction>
        <TitleText size="l">
          Nossos Exames de Ultrassonografia Tem suporte a Laudos Online!
        </TitleText>
        <TextRegular>
          Desvende o Futuro da sua Saúde. Acesse Agora seus Laudos Ultrassônicos
          Online!
        </TextRegular>

        <Button bgColor="white" btnLarge={false}>
          Marcar Exame!
        </Button>
      </ContentCallAction>
    </ContainerCallAction>
  )
}
