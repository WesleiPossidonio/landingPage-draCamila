import { TextRegular, TitleText } from '../typograph'
import { BoxNumber, ContainerSteps, Step, StepsContent } from './styled'

export const Steps = () => {
  return (
    <ContainerSteps>
      <TitleText size="l">Como faço o Agendamento do Exame?</TitleText>
      <TextRegular color="white-200">
        Entre em contato conosco e faça o seu exame no conforto do seu lar!
      </TextRegular>

      <StepsContent>
        <Step>
          <BoxNumber>01</BoxNumber>
          <TitleText size="s">Entre em Contato</TitleText>
          <TextRegular size="s" color="white-200">
            Inicie uma conversa com nossa equipe pelo WhatsApp ou pelo
            formulário abaixo. Você pode fazer isso pelo WhatsApp{' '}
            <a href="#">Clicando Aqui</a>.
          </TextRegular>
        </Step>

        <Step>
          <BoxNumber>02</BoxNumber>
          <TitleText size="s">Apresente-se e Pergunte a sua Dúvida</TitleText>
          <TextRegular size="s" color="white-200">
            Após iniciar a conversa, nossa equipe de atendimento ao cliente irá
            lhe responder e apresentar a melhor solução para a realização do seu
            exame.
          </TextRegular>
        </Step>
        <Step>
          <BoxNumber>03</BoxNumber>
          <TitleText size="s">Forneça as Informações Necessárias</TitleText>
          <TextRegular size="s" color="white-200">
            Para agendar o exame, precisaremos de algumas informações
            importantes tais como: seu nome completo, tipo de exame de
            ultrassonografia que você deseja (por exemplo, abdominal,
            obstétrica, vascular, etc.) e sua disponibilidade de datas e
            horários.
          </TextRegular>
        </Step>
        <Step>
          <BoxNumber>04</BoxNumber>
          <TitleText size="s">Pagamento e Confirmação do Agendamento</TitleText>
          <TextRegular size="s" color="white-200">
            Assim que recebermos suas informações, nossa equipe confirmará o
            agendamento do exame e fornecerá todos os detalhes necessários.
          </TextRegular>
        </Step>
      </StepsContent>
    </ContainerSteps>
  )
}
