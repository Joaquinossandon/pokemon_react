import MainNav from "./components/MainNav"
import PokemonList from "./pages/PokemonList"
import Login from "./pages/Login"
import { Navigate, Route, Routes } from "react-router-dom"
import Error404 from "./pages/Error404"
import { useTheme } from "./context/ThemeContext"
import Home from "./pages/Home"
import Pokemon from "./pages/Pokemon"
import Profile from "./pages/Profile"
import { useUser } from "./context/UserContext"

function App() {
  const { theme } = useTheme()
  const { user } = useUser()

  return (
    <div data-bs-theme={theme} className={`bg-${theme}`}>
      <MainNav />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<PokemonList />} path="/pokemon-list" />
        <Route element={<Pokemon />} path="/pokemon-list/:idPokemon" />
        <Route element={user ? <Navigate to="/" /> : <Login />} path="/login" />
        <Route element={user ? <Profile /> : <Navigate to="/login" />} path="/profile" />
        <Route element={<Error404 />} path="*" />
      </Routes>
    </div>
  )
}

export default App
