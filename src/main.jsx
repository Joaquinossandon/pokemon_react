import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ThemeContext from './context/ThemeContext.jsx'
import UserContext from './context/UserContext.jsx'
import CatchPokemonProvider from './context/CatchPokemonContext.jsx'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeContext>
        <UserContext>
          <CatchPokemonProvider>
            <App />
          </CatchPokemonProvider>
        </UserContext>
      </ThemeContext>
    </BrowserRouter>
  </StrictMode>,
)
