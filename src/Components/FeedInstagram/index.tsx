import AOS from 'aos'
import * as Dialog from '@radix-ui/react-dialog'
import { useEffect } from 'react'
import { TextRegular, TitleText } from '../typograph'
import { ModalInstagram } from '../ModalIntagram'
import { useDataCompany } from '../../context/CompanyContext'

import { InstagramLogo, VideoCamera } from '@phosphor-icons/react'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import {
  ContainerFeedInstagram,
  ContainerTitle,
  ContentFeedInstagram,
  ContentTextHover,
  LinkPost,
  TextPost,
} from './styled'

export const FeedInstagram = () => {
  const { feedInstagramData } = useDataCompany()

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ContainerFeedInstagram>
      <ContainerTitle>
        <TextRegular color="secundary-bg" weight={600}>
          #Instagram
        </TextRegular>
        <TitleText size="l">Siga as Nossas Redes</TitleText>
      </ContainerTitle>

      <ContentFeedInstagram>
        {feedInstagramData.slice(0, 8).map((post) => {
          return (
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <LinkPost
                  key={post.id}
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <ContentTextHover>
                    <TextPost>
                      {format(new Date(post.timestamp), 'dd MMMM yyyy', {
                        locale: ptBR,
                      })}
                    </TextPost>
                    <TextPost>{post.caption}</TextPost>
                  </ContentTextHover>

                  {post.media_type !== 'IMAGE' ? (
                    <img src={post.thumbnail_url} alt="" />
                  ) : (
                    <img src={post.media_url} alt="" />
                  )}
                  <InstagramLogo
                    size={22}
                    color="#fff"
                    weight="bold"
                    id="logoInstagram"
                  />
                  {post.media_type === 'VIDEO' && (
                    <VideoCamera
                      size={20}
                      weight="bold"
                      id="videoIcon"
                      color="#fff"
                    />
                  )}
                </LinkPost>
              </Dialog.Trigger>
              <ModalInstagram idPostInstagram={post.id} />
            </Dialog.Root>
          )
        })}
      </ContentFeedInstagram>
    </ContainerFeedInstagram>
  )
}
