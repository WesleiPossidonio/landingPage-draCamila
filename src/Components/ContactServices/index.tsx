import { TextArea } from '../../Pages/Contact/styled'
import { Button } from '../Button'
import { Input } from '../Input'
import { TextRegular, TitleText } from '../typograph'
import { ContainerContactServices, ContainerText, Form } from './styled'

export const ContactServices = () => {
  return (
    <ContainerContactServices>
      <ContainerText>
        <TitleText size="l">
          Entre em contato conosco agora e permita-nos ajudar a atender suas
          necessidades de maneira rápida e eficiente.
        </TitleText>
        <TextRegular>
          Estamos ansiosos para ouvir você! Seja para esclarecer dúvidas, obter
          mais informações ou receber assistência especializada, nossa equipe
          está pronta para atendê-lo. Entre em contato conosco através do
          formulário abaixo
        </TextRegular>
      </ContainerText>

      <Form>
        <Input placeholder="Nome"></Input>
        <Input placeholder="Telefone"></Input>
        <Input placeholder="E-Mail"></Input>
        <TextArea placeholder="Escreva sua dúvida..." />
        <Button bgColor="secundary-bg" btnLarge={false}>
          Enviar
        </Button>
      </Form>
    </ContainerContactServices>
  )
}
