import { ThemeProvider } from 'styled-components'
import { DefaultThemes } from './Styles/Theme/Default'
import { GlobalStyled } from './Styles/global'
import { Home } from './Pages'
import { AppProvider } from './context'

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={DefaultThemes}>
        <Home />
        <GlobalStyled />
      </ThemeProvider>
    </AppProvider>
  )
}

export default App
