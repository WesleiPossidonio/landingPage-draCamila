import styled from 'styled-components'

export const ContainerContactServices = styled.section`
  width: 100%;
  height: 35rem;
  min-height: max-content;

  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  padding: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    margin-top: 2rem;
    margin-bottom: 4rem;
    padding: 1.5rem;
  }
`

export const ContainerText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  padding: 2rem 1rem;
  border-radius: 12px;

  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  background-color: ${({ theme }) => theme.colors['base-green-400']};

  @media (max-width: 768px) {
    width: 100%;
  }
`
