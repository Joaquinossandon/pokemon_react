import { useEffect, useState } from "react"
import { Card, Button } from "react-bootstrap"
import { useCatchPokemon } from "../context/CatchPokemonContext"
import { Link } from "react-router-dom"
import { useUser } from "../context/UserContext"

const PokemonCard = ({ pokemon }) => {
    const [currentPokemon, setCurrentPokemon] = useState(pokemon.url ? {} : pokemon)
    const { addPokemon } = useCatchPokemon()
    const { user } = useUser()

    useEffect(() => {
        if (pokemon.url) {
            const getPokemon = async () => {
                const response = await fetch(pokemon.url)
                const data = await response.json()

                setCurrentPokemon(() => {
                    return data
                })
            }

            getPokemon()
        }
    }, [])
    return (
        <Card>
            <Card.Img variant="top" src={currentPokemon?.sprites?.other['official-artwork'].front_default} />
            <Card.Body>
                <Card.Title>{currentPokemon.name}</Card.Title>
                <Button variant="primary" disabled={!user ? true : false} onClick={() => addPokemon(currentPokemon)}>Atrapar</Button>
                <Link className="btn btn-primary" to={`/pokemon-list/${currentPokemon.id}`}>Ver más</Link>
            </Card.Body>
        </Card>
    )
}

export default PokemonCard