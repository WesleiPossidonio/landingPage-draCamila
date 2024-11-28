import styled from 'styled-components'

export const ContainerDra = styled.section`
  width: 100%;
  height: 53rem;
  min-height: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15rem;

  background-color: ${({ theme }) => theme.colors['base-bg']};

  @media (max-width: 710px) {
    gap: 5rem;

    padding: 3rem 0;
  }
`

export const ImgLogo = styled.img`
  width: 15rem;
`

export const ContentDra = styled.div`
  width: 90%;
  height: 24rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 4rem;
  border-radius: 16px;

  position: relative;

  background-color: ${({ theme }) => theme.colors['base-green-400']};

  @media (max-width: 710px) {
    height: 45rem;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem 4rem;
  }

  @media (max-width: 320px) {
    height: 40rem;
  }
`

export const ContentText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;

  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
  }

  @media (max-width: 710px) {
    width: 90%;
  }

  @media (max-width: 320px) {
    width: 100%;
  }
`

export const Image = styled.img`
  width: 27rem;

  position: absolute;
  right: 4%;
  bottom: 0;

  @media (max-width: 710px) {
    right: 25%;

    width: min(20rem, 65vw);
  }

  @media (max-width: 619px) {
    right: 17%;

    width: min(20rem, 65vw);
  }
`
