import * as Dialog from '@radix-ui/react-dialog'
import { InstagramLogo, X } from '@phosphor-icons/react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { useDataCompany } from '../../context/CompanyContext'

import {
  CloseButton,
  ContentTextHeader,
  ContentModal,
  ContentText,
  HeaderContainer,
  Overlay,
  LinkMedia,
} from './styled'
import { TextRegular, TitleText } from '../typograph'

interface ModalVideoProps {
  idPostInstagram: string
}

export const ModalInstagram = ({ idPostInstagram }: ModalVideoProps) => {
  const { feedInstagramData } = useDataCompany()

  const filteredFeedInstgram = feedInstagramData.find(
    (post) => post.id === idPostInstagram,
  )
  return (
    <Dialog.Portal>
      <Overlay />
      <ContentModal>
        <CloseButton>
          <X size={24} weight="bold" />
        </CloseButton>
        {filteredFeedInstgram?.media_type !== 'IMAGE' ? (
          <LinkMedia href={filteredFeedInstgram?.permalink} target="_blank">
            <video controls controlsList="nodownload">
              <source src={filteredFeedInstgram?.media_url} type="video/mp4" />
            </video>
          </LinkMedia>
        ) : (
          <LinkMedia href={filteredFeedInstgram?.permalink} target="_blank">
            <img src={filteredFeedInstgram.media_url} alt="" />
          </LinkMedia>
        )}
        <ContentText>
          <HeaderContainer>
            <ContentTextHeader>
              <LinkMedia href={filteredFeedInstgram?.permalink} target="_blank">
                <TitleText size="s" color="text">
                  {filteredFeedInstgram?.username}
                </TitleText>
              </LinkMedia>
              <TextRegular size="sm">
                {filteredFeedInstgram?.timestamp
                  ? format(
                      new Date(filteredFeedInstgram.timestamp),
                      'dd MMMM yyyy',
                      { locale: ptBR },
                    )
                  : 'Data indisponível'}
              </TextRegular>
            </ContentTextHeader>

            <InstagramLogo size={30} color="#000" id="logoInstagram" />
          </HeaderContainer>
          <TextRegular size="sm" weight={500}>
            {filteredFeedInstgram?.caption}
          </TextRegular>
        </ContentText>
      </ContentModal>
    </Dialog.Portal>
  )
}
