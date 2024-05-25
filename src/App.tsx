import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Borá pro desafio coffee</h1>

      <GlobalStyle />
    </ThemeProvider>
  )
}
