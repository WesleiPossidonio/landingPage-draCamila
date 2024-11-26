import {
  // ColorOverlay,
  ContainerMainPage,
  ContentText,
  // Content,
  ImgBanner,
} from './styled'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import img from '../../assets/BannerPc.jpg'
import { TextRegular, TitleText } from '../typograph'
import { Button } from '../Button'

export const Hero = () => {
  return (
    <ContainerMainPage id="home">
      <Swiper
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="ContentSlide">
          <ImgBanner src={img} alt="" />
          <ContentText>
            <TitleText size="xl">
              Ultra Home-Care <br /> Qualidade e comodidade <br /> onde{' '}
              <span> você estiver. </span>
            </TitleText>
            <TextRegular>Cuide da sua saúde sem sair de casa!</TextRegular>
            <Button bgColor="secundary-bg" btnLarge={false}>
              Saiba Mais!
            </Button>
          </ContentText>
        </SwiperSlide>
      </Swiper>
    </ContainerMainPage>
  )
}
