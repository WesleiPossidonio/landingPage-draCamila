import styled from 'styled-components'

export const ContainerContact = styled.section`
  width: 100%;
  height: 100vh;
  min-height: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5rem;

  padding: 0.5rem 2rem;

  background-color: ${({ theme }) => theme.colors['base-bg']};

  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem;
  }
`

export const ContainerHeader = styled.div`
  width: 100%;
  height: 22rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors['base-green-400']};

  span {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors['base-text']};
  }
`

export const ContainerForm = styled.section`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;

  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Form = styled.form`
  width: 50%;
  height: 35rem;
  min-height: max-content;

  padding: 1.5rem;

  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;
  /* background-color: ${({ theme }) => theme.colors['base-green-400']}; */

  #reCaptcha {
    align-self: flex-start;
  }

  @media (max-width: 768px) {
    width: 100%;
    order: 2;

    #reCaptcha {
      transform: scale(0.7); /* Reduz o tamanho para 80% */
      transform-origin: 0 0; /* Ajusta o ponto de origem da escala */
    }
  }
`

interface TextAreaProps {
  error?: string
}

export const TextArea = styled.textarea<TextAreaProps>`
  width: 100%;
  height: 8rem;

  padding: 0.5rem;
  border: 2px solid
    ${({ theme, error }) =>
      error !== undefined
        ? theme.colors['base-red']
        : theme.colors['base-white']};
  border-radius: 8px;

  font-size: 0.8835125rem;
  line-height: 1.3125rem;
  font-style: normal;
  font-weight: 400;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  background: ${({ theme }) => theme.colors['base-white']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-black']};
  }
  /* 
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors['base-bg']};
    border-radius: 8px;
  } */
`

export const ContentText = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.9rem;

  a {
    color: ${({ theme }) => theme.colors['base-text']};

    &:hover {
      color: ${({ theme }) => theme.colors['base-bg']};
    }
  }
`

export const BoxIcon = styled.span`
  width: 5rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  background-color: ${({ theme }) => theme.colors['base-secundary-bg']};

  svg {
    color: ${({ theme }) => theme.colors['base-text']};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-green-400']};

    svg {
      color: ${({ theme }) => theme.colors['base-white']};
    }
  }

  @media (max-width: 500px) {
    width: 4rem;
    height: 3rem;

    svg {
      width: 2.3rem;
    }
  }
`
