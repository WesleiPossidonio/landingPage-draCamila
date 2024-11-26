import styled from 'styled-components'

export const ContainerAbout = styled.section`
  width: 100%;
  height: 40rem;
  min-height: max-content;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors['base-bg']};

  @media (max-width: 768px) {
    padding: 3.5rem 1.5rem;
    flex-direction: column;
  }
`

export const ContainerText = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const ContainerImage = styled.div`
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  #ImgOne {
    margin-top: 7.5rem;
  }
`

export const Image = styled.img`
  width: min(13rem, 20vw);
  object-fit: cover;

  border-radius: 6px;

  @media (max-width: 668px) {
    width: min(13rem, 35vw);
  }
`
