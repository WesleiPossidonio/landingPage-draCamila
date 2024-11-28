import styled from 'styled-components'
import AccordionSummary from '@mui/material/AccordionSummary'
import { styled as muiStyled } from '@mui/material/styles'

export const ContainerFaq = styled.section`
  width: 100%;
  height: 45rem;
  min-height: max-content;

  padding: 3rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  background-color: ${({ theme }) => theme.colors['base-green-400']};

  div {
    border-radius: 8px !important;
  }

  a {
    color: ${({ theme }) => theme.colors['base-green-400']};
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    padding: 3.5rem 1.5rem;
  }
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`

export const ContainerAcordion = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ContentAcordion = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  gap: 1.5rem;
  border-radius: 8px;

  padding: 3rem 2rem;

  @media (max-width: 1024px) {
    padding: 0;
  }
`

export const AccordionContent = muiStyled(AccordionSummary)({
  '&:focus': {
    backgroundColor: '#D3B88D',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
  },
})
