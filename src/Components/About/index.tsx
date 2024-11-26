import { TextRegular, TitleText } from '../typograph'
import { ContainerAbout, ContainerImage, ContainerText, Image } from './styled'

import ImgAbout from '../../assets/ImgAboutOne.jpg'
import ImgAboutTwo from '../../assets/ImgAboutTwo.jpg'
import { Button } from '../Button'

export const About = () => {
  return (
    <ContainerAbout>
      <ContainerText>
        <div>
          <TitleText size="s" color="secundary-bg">
            - Sobre Nós
          </TitleText>
          <TitleText size="l">
            Uma História Repleta de Inspiração e Dedicação.
          </TitleText>
        </div>

        <TextRegular>
          Sou uma Dra. de ultrassonografia dedicada, apaixonada por meu trabalho
          e pela possibilidade de explorar os mistérios internos do corpo
          humano. Tenho a alegria de ser mãe de duas filhas lindas, que são meu
          maior orgulho. Minha família é meu porto seguro, meu refúgio de amor e
          felicidade. Através da minha profissão.
        </TextRegular>

        <Button bgColor="secundary-bg" btnLarge={false}>
          Saiba Mais!
        </Button>
      </ContainerText>

      <ContainerImage>
        <Image src={ImgAbout} id="ImgOne" />
        <Image src={ImgAboutTwo} />
      </ContainerImage>
    </ContainerAbout>
  )
}
