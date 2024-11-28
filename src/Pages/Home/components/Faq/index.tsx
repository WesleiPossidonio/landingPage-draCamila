import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { CaretDown } from '@phosphor-icons/react'

import { TextRegular, TitleText } from '../../../../Components/typograph'
import {
  AccordionContent,
  ContainerAcordion,
  ContainerFaq,
  ContainerTitle,
  ContentAcordion,
} from './styled'

export const Faq = () => {
  return (
    <ContainerFaq>
      <ContainerTitle>
        <TextRegular color="secundary-bg" weight={600}>
          #Faq
        </TextRegular>
        <TitleText size="l">Principais Dúvidas</TitleText>
      </ContainerTitle>

      <ContainerAcordion>
        <ContentAcordion>
          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>O que é ultrassom?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                O ultrassom é um procedimento de diagnóstico por imagem que
                emprega ondas de alta frequência para criar imagens dos órgãos
                dentro do corpo humano.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Para que serve ultrassom?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Utilizando o equipamento de ultrassom, é viável examinar a
                composição, fluxo sanguíneo e operação saudável ou problemática
                de órgãos e regiões do organismo.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Posso fazer ultrassom em minha casa?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Sim, com o avanço da tecnologia,
                <strong>
                  {' '}
                  já é possível fazer o ultrassonografia no conforto da sua
                  casa.{' '}
                </strong>{' '}
                Nós utilizamos equipamentos portáteis de última tecnologia{' '}
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B5522999300802&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Clique Aqui
                </a>{' '}
                para saber nais detalhes e marcar o seu exame
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Como funciona o exame de ultrassom?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Enquanto o paciente está sentado ou deitado, o médico que
                realiza o exame vai colocar um gel na área que será examinada.
                Isso ajuda a reduzir o atrito entre o aparelho e o paciente.{' '}
                <br />
                Usando uma parte chamada de transdutor, o aparelho emite e
                recebe ondas ultrassônicas. Essas ondas entram em contato com a
                pele do paciente e enviam informações que são transformadas em
                imagens na tela. O médico olha para essas imagens e as analisa,
                escrevendo um relatório baseado nessa análise.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                Precisa de preparo para fazer ultrassonografia?
              </Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Isso pode variar conforme a parte do corpo que será examinada.
                Veja a seguir quais são os cuidados específicos de acordo com a
                área a ser analisada.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Quais as contraindicações do ultrassom?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                O exame de ultrassom pode ser feito sem preocupações, pois não
                há restrições específicas.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </ContentAcordion>

        <ContentAcordion>
          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography> O ultrassom é um exame seguro?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Sim, O ultrassom é uma tecnologia segura que utiliza ondas
                ultrassônicas de alta frequência, mais de 1 milhão de vezes por
                segundo, para criar imagens na tela do aparelho. Essas ondas não
                podem ser ouvidas pelo ouvido humano.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>O ultrassom dói?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                O ultrassom não causa dor nem causa desconforto ao paciente
                durante o exame.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                Quem tem tatuagens pode fazer ultrassonografia?
              </Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Certamente, os pacientes podem passar pelo ultrassom sem
                problemas, pois ter tatuagens não representa nenhuma restrição
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                Posso usar brincos ou adornos durante o exame de ultrassom?
              </Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Sim, o exame é apropriado até mesmo para rastrear a localização
                do DIU em mulheres que usam esse método. No entanto, é
                importante notar que brincos e acessórios externos podem
                interferir se estiverem muito próximos ou na área a ser
                examinada.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                Devo estar acompanhado no exame de ultrassonografia?
              </Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                É importante verificar se a farmácia de manipulação está
                regularizada pelos órgãos de vigilância sanitária e se segue as
                boas práticas de manipulação. Além disso, procure referências de
                outros clientes e verifique se a farmácia possui certificações e
                selos de qualidade reconhecidos.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </ContentAcordion>
      </ContainerAcordion>
    </ContainerFaq>
  )
}
