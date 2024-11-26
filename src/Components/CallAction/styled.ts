import styled from 'styled-components'

export const ContainerCallAction = styled.section`
  width: 100%;
  height: 40rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors['base-bg']};

  @media (max-width: 428px) {
    height: 35rem;
  }
`

export const ContentCallAction = styled.div`
  width: 85%;
  height: 25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  text-align: center;

  padding: 2rem;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.colors['base-green-400']};

  h1 {
    max-width: 75%;
  }

  button {
    margin-top: 0.7rem;
  }

  @media (max-width: 768px) {
    h1 {
      max-width: 85%;
    }
  }
`
