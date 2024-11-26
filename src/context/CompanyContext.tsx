import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
// import { toast } from 'react-toastify'
import api from '../services/api'

export interface DataPostInstagramProps {
  id: string
  username: string
  caption: string
  media_type: 'VIDEO' | 'IMAGE'
  media_url: string
  permalink: string
  timestamp: string
  thumbnail_url: string
  like_count: string
  comments_count: string
}

interface ListCompanyType {
  feedInstagramData: DataPostInstagramProps[]
}

interface ListCompanyProps {
  children: ReactNode
}

export const CompanyContext = createContext({} as ListCompanyType)

export const ListCompanyProvider = ({ children }: ListCompanyProps) => {
  const [feedInstagramData, setFeedInstagramData] = useState<
    DataPostInstagramProps[]
  >([])

  const getFeedInstagram = useCallback(async () => {
    try {
      const response = await api.get('feedInsta')
      const { data } = response

      const storedFeed = localStorage.getItem('feedInsta:gasparTransportes1.0')

      if (storedFeed) {
        const parsedStoredFeed = JSON.parse(storedFeed)

        // Verifica se o conteúdo do localStorage é diferente da resposta da API
        if (JSON.stringify(parsedStoredFeed) !== JSON.stringify(data.data)) {
          // Atualiza o localStorage se for diferente
          localStorage.setItem(
            'feedInsta:gasparTransportes1.0',
            JSON.stringify(data.data),
          )
          setFeedInstagramData(data.data)
        } else {
          // Se for igual, define o estado com os dados do localStorage
          setFeedInstagramData(parsedStoredFeed)
        }
      } else {
        // Caso não haja dados no localStorage, chama a API e armazena o resultado
        localStorage.setItem(
          'feedInsta:gasparTransportes1.0',
          JSON.stringify(data.data),
        )
        setFeedInstagramData(data.data)
      }
    } catch (error) {
      console.log('Erro ao buscar o feed do Instagram:', error)
    }
  }, [])

  useEffect(() => {
    const feedInsta = localStorage.getItem('feedInsta:gasparTransportes1.0')

    if (feedInsta) {
      // Se houver dados no localStorage, define o estado com eles
      setFeedInstagramData(JSON.parse(feedInsta))
    }

    // Chama a função para verificar e atualizar os dados
    getFeedInstagram()
  }, [getFeedInstagram])

  return (
    <CompanyContext.Provider
      value={{
        feedInstagramData,
      }}
    >
      {children}
    </CompanyContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useDataCompany = () => {
  const context = useContext(CompanyContext)
  return context
}
