import styled from 'styled-components'

export const ContainerUltradelivery = styled.section`
  width: 100%;
  height: 100vh;
  min-height: max-content;

  padding-top: 0.5rem;

  background-color: ${({ theme }) => theme.colors['base-bg']};

  @media (max-width: 425px) {
    padding-top: 0.7rem;
  }
`

export const ContainerServices = styled.div`
  width: 100%;
  height: 33rem;
  min-height: max-content;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 4rem;

  padding: 3rem 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    margin-top: 2rem;
    margin-bottom: 3rem;

    padding: 2rem 1rem;
  }
`

export const ContentText = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  span {
    color: ${({ theme }) => theme.colors['base-secundary-bg']};
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`
