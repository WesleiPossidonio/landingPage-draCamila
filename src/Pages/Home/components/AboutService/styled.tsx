import styled from 'styled-components'

export const ContainerAboutService = styled.section`
  width: 100%;
  height: 40rem;
  min-height: max-content;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3rem;

  padding: 3.5rem;

  background-color: ${({ theme }) => theme.colors['base-green-400']};

  @media (max-width: 800px) {
    padding: 3.5rem 1.5rem;
    flex-direction: column;
  }
`

export const ContainerImages = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 800px) {
    order: 2;
  }
`

interface ImageProps {
  widthLarge: boolean
}

export const Image = styled.img<ImageProps>`
  width: ${({ widthLarge }) => (widthLarge ? '18rem' : '15rem')};
  height: ${({ widthLarge }) => widthLarge && '12rem'};

  border-radius: 12px;

  object-fit: cover;

  @media (max-width: 768px) {
    width: ${({ widthLarge }) =>
      widthLarge ? 'min(18rem, 45vw)' : 'min(15rem, 38vw)'};
    height: ${({ widthLarge }) => widthLarge && '9rem'};
  }
`

export const ContainerCountdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
`

export const CardCountdown = styled.span`
  width: min(15rem, 40vw);
  height: min(11rem, 23vh);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  text-align: center;
  padding: 0.5rem;

  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors['base-secundary-bg']};

  @media (max-width: 425px) {
    height: 8.5rem;
    #text-countdow {
      font-size: 1rem;
    }
  }
`

export const ContainerText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 800px) {
    width: 100%;
  }
`

export const ContainerSpan = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 3rem;
`

export const ContentSpan = styled(ContainerSpan)`
  justify-content: flex-start;
  gap: 0.7rem;
`

export const ContentNumber = styled.span`
  width: 3rem;
  height: 3rem;

  border-radius: 9999px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors['base-secundary-bg']};
`
