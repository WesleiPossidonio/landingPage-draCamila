import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  width: 100%;
  height: 20rem;
  min-height: max-content;
  padding: 2.5rem 2rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.colors['base-green-400']};

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
  }
`

export const ContainerContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`

export const ContentLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.8rem;
`

export const LinkSite = styled(ContentLinks)`
  gap: 0.6rem;
`
export const TitleLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.2rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`

export const ImgLogo = styled.img`
  width: 11rem;
  margin-bottom: 0.5rem;
`
