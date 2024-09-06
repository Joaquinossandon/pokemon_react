import MainNav from "./components/MainNav"
import PokemonList from "./pages/PokemonList"
import Login from "./pages/Login"
import { Route, Routes } from "react-router-dom"
import Error404 from "./pages/Error404"
import { useTheme } from "./context/ThemeContext"

function App() {
  const { theme } = useTheme()

  return (
    <div data-bs-theme={theme} className={`bg-${theme}`}>
      <MainNav />
      <Routes>
        <Route element={<PokemonList />} path="/pokemon-list" />
        <Route element={<Login />} path="/login" />
        <Route element={<Error404 />} path="*" />
      </Routes>
    </div>
  )
}

export default App
