import ImgLogo from '../../../../assets/Logo-Services.svg'

import { Swiper } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import {
  CardServices,
  ContainerCarousel,
  IconServices,
  ImageLogo,
  LinkPages,
  SectionServices,
} from './styled'

import 'swiper/css'
import 'swiper/css/pagination'
import { TextRegular, TitleText } from '../../../../Components/typograph'
import { useNavigate } from 'react-router-dom'

type ListServices = {
  id: number
  title: string
  text: string
  IconSvg: string
  linkPage: string
}

interface ServicesSectionProps {
  listService: ListServices[]
}

export const ServicesSection = ({ listService }: ServicesSectionProps) => {
  const navigate = useNavigate()
  return (
    <SectionServices>
      <ImageLogo src={ImgLogo} />

      <ContainerCarousel>
        <TitleText size="l">
          Nossos Exames <br /> de <span>Ultrassonografia</span>
        </TitleText>

        <TextRegular>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          magni iure, rem numquam alias
        </TextRegular>

        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            540: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            2000: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {listService.map((list) => {
            return (
              <CardServices key={list.id}>
                <IconServices src={list.IconSvg} />
                <div>
                  <TitleText size="s">{list.title}</TitleText>
                  <TextRegular size="sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti, sint! Ipsa delectus velit aliquid illo
                    consequatur!
                  </TextRegular>

                  <LinkPages onClick={() => navigate(list.linkPage)}>
                    Saiba Mais
                  </LinkPages>
                </div>
              </CardServices>
            )
          })}
        </Swiper>
      </ContainerCarousel>
    </SectionServices>
  )
}
