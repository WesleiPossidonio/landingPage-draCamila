import { ListServices } from '../../Components/ListServices'
import {
  About,
  AboutService,
  CallAction,
  Faq,
  FeedInstagram,
  Hero,
  SectionDra,
  ServicesSection,
} from './components'

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ServicesSection listService={ListServices} />
      <CallAction />
      <AboutService />
      <FeedInstagram />
      <Faq />
      <SectionDra />
    </>
  )
}
