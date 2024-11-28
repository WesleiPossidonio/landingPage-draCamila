import styled from 'styled-components'

export const ContainerCallAction = styled.section`
  width: 100%;
  max-height: 35rem;
  min-height: 23rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  margin-bottom: 5rem;
  padding: 2rem;

  background-color: ${({ theme }) => theme.colors['base-green-400']};

  span {
    color: ${({ theme }) => theme.colors['base-secundary-bg']};
  }

  @media (max-width: 666px) {
    br {
      display: none;
    }
  }

  @media (max-width: 375px) {
    gap: 1.5rem;
  }
`

export const LogoImage = styled.img`
  width: min(9rem, 25vw);
`

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  button {
    margin-top: 1rem;
  }
`
