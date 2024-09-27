import { Button, Container, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"
import { useUser } from "../context/UserContext"
import { useCatchPokemon } from "../context/CatchPokemonContext"
import './MainNav.css'

const MainNav = () => {
    const { theme, toggleTheme } = useTheme()
    const { user, signIn, signOut } = useUser()
    const { total, checkout } = useCatchPokemon()

    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/pokemon-list">Lista Pokemon</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/profile">Perfil</NavLink>
                    </li>
                    <li className="nav-item">
                        <Button onClick={toggleTheme}>{theme === 'dark' ? '🌞' : '🌕'}</Button>
                    </li>
                    <li className="nav-item">
                        <Button onClick={checkout}>total: {total}</Button>
                    </li>
                    {!user ?
                        <li className="nav-item">
                            <Button onClick={signIn}>login</Button>
                        </li>
                        :
                        <li className="nav-item">
                            <Button onClick={signOut}>logout</Button>
                        </li>
                    }
                </ul>
            </Container>
        </Navbar>
    )
}

export default MainNav