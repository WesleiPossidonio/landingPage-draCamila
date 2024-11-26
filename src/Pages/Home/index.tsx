import {
  About,
  AboutService,
  CallAction,
  Faq,
  FeedInstagram,
  Footer,
  Header,
  Hero,
  SectionDra,
  ServicesSection,
} from '../../Components'
import { ListServices } from '../../Components/ListServices'

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ServicesSection listService={ListServices} />
      <CallAction />
      <AboutService />
      <FeedInstagram />
      <Faq />
      <SectionDra />
      <Footer />
    </>
  )
}
