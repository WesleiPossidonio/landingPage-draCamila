import styled from 'styled-components'

export const ContainerSteps = styled.section`
  width: 88%;
  height: max-content;
  margin: 0 auto;

  padding: 3rem 2rem;
  border-radius: 16px;
  color: #fff;
  text-align: start;

  background-color: ${({ theme }) => theme.colors['base-green-400']};

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

export const StepsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: space-between;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Step = styled.div`
  max-width: 22%;
  flex: 1;

  border-radius: 10px;
  padding: 1.5rem;

  text-align: left;

  p {
    margin-top: 0.5rem;
  }

  @media (max-width: 1024px) {
    max-width: 45%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0.6rem;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  p {
    font-size: 0.9rem;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
  }

  a {
    color: ${({ theme }) => theme.colors['base-secundary-bg']};
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const BoxNumber = styled.span`
  width: 3.5rem;
  height: 3.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 1rem;

  border-radius: 50%;
  font-weight: bold;
  font-size: 1.2rem;

  background-color: ${({ theme }) => theme.colors['base-secundary-bg']};
  color: ${({ theme }) => theme.colors['base-text']};

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
    font-size: 1rem;
  }
`
