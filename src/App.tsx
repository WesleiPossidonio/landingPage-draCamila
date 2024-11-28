import { ThemeProvider } from 'styled-components'
import { DefaultThemes } from './Styles/Theme/Default'
import { GlobalStyled } from './Styles/global'

import { AppProvider } from './context'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes/routes'
import { Footer, Header } from './Components'

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ThemeProvider theme={DefaultThemes}>
          <Header />
          <Router />
          <Footer />
          <GlobalStyled />
        </ThemeProvider>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
