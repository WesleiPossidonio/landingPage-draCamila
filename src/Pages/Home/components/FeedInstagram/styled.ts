import styled from 'styled-components'

export const ContainerFeedInstagram = styled.section`
  width: 100%;
  max-width: 112.5rem;
  height: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  padding: 2rem 1rem;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors['base-bg']};
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  margin-top: 1.5rem;

  // Estilização Title
  span {
    font-size: 1.5rem;
  }

  .title {
    display: none;
  }
`

export const ContentFeedInstagram = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12.625rem, 1fr));
  gap: 1.5rem;

  margin: 0 auto;
  padding: 2rem 3rem;
  cursor: pointer;

  @media (min-width: 1024px) {
    max-width: 70rem;
  }

  @media (max-width: 720px) {
    padding: 1rem;
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(auto-fit, minmax(8.625rem, 1fr));
  }

  @media (max-width: 320px) {
    grid-template-columns: repeat(auto-fit, minmax(7.625rem, 1fr));
  }
`

export const LinkPost = styled.div`
  position: relative;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  img,
  video {
    width: 13rem;
    height: 13rem;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;

    filter: brightness(0.8);
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  }

  #videoIcon {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 2;
  }

  #logoInstagram {
    position: absolute;
    bottom: 0.7rem;
    left: 0.6rem;
    z-index: 2;
  }

  &:hover {
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      z-index: 2;
    }

    img,
    video {
      filter: brightness(0.6);
    }
  }

  @media (max-width: 425px) {
    img,
    video {
      height: 9rem;
    }
  }

  @media (max-width: 320px) {
    img,
    video {
      height: 8rem;
    }
  }
`

export const ContentTextHover = styled.div`
  width: 100%;
  display: none;
  position: fixed;
  padding: 1rem;
`

export const TextPost = styled.p`
  width: 100%;
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  line-height: 1.2rem;
  color: ${({ theme }) => theme.colors['base-white']};

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
