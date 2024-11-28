import ImgDra from '../../../../assets/image-dra.png'
import ImageLogo from '../../../../assets/camila-galiza-logo.svg'

import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'

import { ContainerDra, ContentDra, ContentText, Image, ImgLogo } from './styled'
import { TextRegular, TitleText } from '../../../../Components/typograph'

export const SectionDra = () => {
  return (
    <ContainerDra>
      <ImgLogo src={ImageLogo} />
      <ContentDra>
        <ContentText>
          <Stack>
            <Rating
              name="half-rating"
              defaultValue={5}
              precision={0.5}
              readOnly
            />
          </Stack>
          <TextRegular size="s" weight={600}>
            “A ultrassonografia revela o mundo interno do corpo humano,
            desvendando segredos silenciosos por meio de ondas sonoras,
            iluminando diagnósticos e guiando cuidados com uma precisão que
            transcende os limites visíveis"
          </TextRegular>

          <div>
            <TitleText size="s">Camila Galiza</TitleText>
            <TextRegular size="sm" weight={600} color="secundary-bg">
              Ultrassonografista
            </TextRegular>
          </div>
        </ContentText>

        <Image src={ImgDra} />
      </ContentDra>
    </ContainerDra>
  )
}
