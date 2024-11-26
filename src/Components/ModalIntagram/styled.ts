import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  z-index: 999;
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`

export const ContentModal = styled(Dialog.Content)`
  z-index: 9999;
  width: 85%;
  max-height: max-content;

  margin: 0 auto;

  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;

  border-radius: 18px;
  padding: 2rem;
  background: ${({ theme }) => theme.colors['base-bg']};

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  @media (max-width: 720px) {
    padding: 1rem;
    flex-wrap: wrap;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 1rem 4rem 1rem;
  }
`

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContentTextHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;

  p {
    font-size: 12px;
  }
`

export const ContentText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 550px) {
    width: 100%;
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: -2rem;
  right: -3rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors['base-white']};
`

export const LinkMedia = styled.a`
  width: 50%;
  video {
    width: 85%;
    max-height: 70vh;
    border-radius: 10px;
  }

  img {
    width: 85%;
    border-radius: 10px;
    object-fit: cover;
    max-height: 37rem;
  }

  @media (max-width: 550px) {
    width: 100%;

    video,
    img {
      width: 100%;
      max-height: 25rem;
    }
  }
`
