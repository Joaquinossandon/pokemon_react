import { useEffect, useState } from "react"
import { Card, Button } from "react-bootstrap"
import { useCatchPokemon } from "../context/CatchPokemonContext"

const PokemonCard = ({ pokemon }) => {
    const [currentPokemon, setCurrentPokemon] = useState([])
    const { addPokemon } = useCatchPokemon()

    useEffect(() => {
        const getPokemon = async () => {
            const response = await fetch(pokemon.url)
            const data = await response.json()

            setCurrentPokemon(() => {
                return data
            })
        }

        getPokemon()
    }, [])
    return (
        <Card>
            <Card.Img variant="top" src={currentPokemon?.sprites?.other['official-artwork'].front_default} />
            <Card.Body>
                <Card.Title>{pokemon.name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card&apos;s content.
                </Card.Text>
                <Button variant="primary" onClick={() => addPokemon(currentPokemon)}>Atrapar</Button>
            </Card.Body>
        </Card>
    )
}

export default PokemonCard