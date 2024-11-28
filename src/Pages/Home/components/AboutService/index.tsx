import CountUp from 'react-countup'

import ImgDra from '../../../../assets/img-dra-destaque1.jpg'
import ImgDratwo from '../../../../assets/img-dra-destaque-desktop.jpg'

import {
  CardCountdown,
  ContainerAboutService,
  ContainerCountdown,
  ContainerImages,
  ContainerSpan,
  ContainerText,
  ContentNumber,
  ContentSpan,
  Image,
} from './styled'
import { TextRegular, TitleText } from '../../../../Components/typograph'
import { Button } from '../../../../Components'

export const AboutService = () => {
  return (
    <ContainerAboutService>
      <ContainerImages>
        <Image widthLarge={false} src={ImgDra} alt="" />

        <ContainerCountdown>
          <CardCountdown>
            <TitleText size="xl">
              +<CountUp end={1000} duration={7} />
            </TitleText>
            <TitleText id="text-countdow">
              Clientes <br /> Satisfeitos
            </TitleText>
          </CardCountdown>
          <Image widthLarge src={ImgDratwo} alt="" />
        </ContainerCountdown>
      </ContainerImages>

      <ContainerText>
        <TitleText weight={500} size="l">
          Não é apenas <br /> <strong>sobre um Exame!</strong>{' '}
        </TitleText>
        <TextRegular>
          É a comodidade de fazer o exame em casa, a flexibilidade de horários
          que você precisa e o laudo online para agilizar seu cuidado, e muito
          mais.
        </TextRegular>

        <ContainerSpan>
          <ContentSpan>
            <ContentNumber>
              <TitleText size="m">1</TitleText>
            </ContentNumber>
            <TextRegular weight={600}>
              Atendimento <br /> Humanizado
            </TextRegular>
          </ContentSpan>

          <ContentSpan>
            <ContentNumber>
              <TitleText size="m">2</TitleText>
            </ContentNumber>
            <TextRegular weight={600}>
              Equipamentos de <br /> Última Geração
            </TextRegular>
          </ContentSpan>
        </ContainerSpan>

        <ContainerSpan>
          <ContentSpan>
            <ContentNumber>
              <TitleText size="m">3</TitleText>
            </ContentNumber>
            <TextRegular weight={600}>
              Atendimento no <br /> conforto do seu lar
            </TextRegular>
          </ContentSpan>

          <ContentSpan>
            <ContentNumber>
              <TitleText size="m">4</TitleText>
            </ContentNumber>
            <TextRegular weight={600}>
              Ultrassom sem <br /> Sair de casa
            </TextRegular>
          </ContentSpan>
        </ContainerSpan>
        <Button bgColor="secundary-bg" btnLarge>
          Saiba Mais!
        </Button>
      </ContainerText>
    </ContainerAboutService>
  )
}
