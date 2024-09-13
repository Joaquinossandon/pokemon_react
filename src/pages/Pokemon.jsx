import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"

function Pokemon() {
    const { idPokemon } = useParams()
    const { theme } = useTheme()
    const [pokemon, setPokemon] = useState({})

    const getPokemonInfo = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
        const res = await fetch(url)
        const pokemonInfo = await res.json()
        setPokemon(pokemonInfo)
    }

    useEffect(() => {
        getPokemonInfo()
    }, [])

    return (
        <>
            <Container className={theme === 'light' ? 'text-dark' : 'text-light'}>
                <div>Estas viendo al pokemon número {idPokemon}</div>
                <p>El pokemon se llama {pokemon.name}</p>
            </Container>
        </>
    )
}

export default Pokemon
