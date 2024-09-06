import { useEffect, useState } from "react"
import PokemonCard from "../components/PokemonCard"
import PokemonContainer from "../components/PokemonContainer"
import { useUser } from "../context/UserContext"
import { Alert } from "react-bootstrap"

const PokemonList = () => {
    const { user } = useUser()
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        const getPokemon = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon')
            const data = await response.json()

            setPokemon(() => {
                return data.results
            })
        }

        getPokemon()
    }, [])

    return (
        <>
            {user ? <Alert>
                Usuario logeado
            </Alert>
                : <Alert >
                    Usuario no logeado
                </Alert>}
            <PokemonContainer>
                {pokemon.map((pokemon) => {
                    return <PokemonCard key={`pokemon-${pokemon.name}`} pokemon={pokemon} />
                })}
            </PokemonContainer>
        </>
    )
}

export default PokemonList