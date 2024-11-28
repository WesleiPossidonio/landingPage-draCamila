import styled from 'styled-components'
import { SwiperSlide } from 'swiper/react'

export const SectionServices = styled.section`
  width: 100%;
  height: 42rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  padding: 2rem;

  background-color: ${({ theme }) => theme.colors['base-green-400']};

  @media (max-width: 768px) {
    height: 38rem;
    padding: 1.5rem;
  }

  @media (max-width: 428px) {
    height: 35rem;
  }
`

export const ImageLogo = styled.img`
  width: min(9rem, 18vw);

  @media (max-width: 550px) {
    display: none;
  }
`

export const ContainerCarousel = styled.div`
  max-width: 80%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  h1 {
    max-width: 75%;
  }

  span {
    color: ${({ theme }) => theme.colors['base-secundary-bg']};
  }

  .mySwiper {
    width: 96%;
  }

  .swiper-wrapper {
    height: 90%;
  }

  @media (max-width: 550px) {
    max-width: 100%;
    br {
      display: none;
    }
  }
`

export const CardServices = styled(SwiperSlide)`
  width: 19rem;
  height: 18rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  padding: 1rem;

  border: 2px solid ${({ theme }) => theme.colors['base-secundary-bg']};

  border-radius: 12px;

  margin-top: 2rem;

  h1 {
    max-width: 100%;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0.5rem;
  }

  &:hover {
    background-color: rgb(211, 184, 141, 0.2);
  }
`
export const IconServices = styled.img`
  width: 3.5rem;
`
export const LinkPages = styled.a`
  font-size: ${({ theme }) => theme.FontSizes['text-regular-s']};
  font-weight: 500;
  color: ${({ theme }) => theme.colors['base-text']};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors['base-secundary-bg']};
  }
`
