import img from '../../../../assets/BannerPc.jpg'

import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { TextRegular, TitleText } from '../../../../Components/typograph'
import { Button } from '../../../../Components'

import {
  // ColorOverlay,
  ContainerMainPage,
  ContentText,
  // Content,
  ImgBanner,
} from './styled'

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
