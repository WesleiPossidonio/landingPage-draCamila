import styled from 'styled-components'

export const ContainerMainPage = styled.section`
  width: 100%;
  height: 100vh;

  .mySwiper {
    width: 100%;
  }

  .ContentSlide {
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ImgBanner = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: 1;

  @media (max-width: 527px) {
    object-position: -38rem;
  }

  @media (max-width: 379px) {
    object-position: -41rem;
  }
`

export const ContentText = styled.div`
  width: 55%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  position: absolute;
  top: 35%;
  left: 2.8%;
  z-index: 1;

  span {
    color: ${({ theme }) => theme.colors['base-secundary-bg']};
  }

  button {
    margin-top: 0.7rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    padding: 2rem;
  }

  @media (max-width: 600px) {
    top: 30%;
  }
`
