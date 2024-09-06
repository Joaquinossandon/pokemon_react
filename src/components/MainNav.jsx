import { Button, Container, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"
import { useUser } from "../context/UserContext"
import { useCatchPokemon } from "../context/CatchPokemonContext"

const MainNav = () => {
    const { theme, toggleTheme } = useTheme()
    const { user, signIn } = useUser()
    const { total } = useCatchPokemon()

    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Button onClick={signIn}>{!user ? 'Login' : 'Hola'}</Button>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/pokemon-list">Lista Pokemon</Link>
                    </li>
                    <li className="nav-item">
                        <Button onClick={toggleTheme}>{theme === 'dark' ? '🌞' : '🌕'}</Button>
                    </li>
                    <li className="nav-item">
                        <Button>total: {total}</Button>
                    </li>
                </ul>
            </Container>
        </Navbar>
    )
}

export default MainNav