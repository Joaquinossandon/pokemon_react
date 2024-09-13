import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';
import { useEffect, useState } from 'react';
import PokemonContainer from '../components/PokemonContainer';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
    const { theme } = useTheme()
    const [pokemon, setPokemon] = useState([])
    const totalPokemon = 1000

    // funcion que genera una cantidad X de números aleatorios
    const randomNumbers = (min, max, generateNumber) => {
        const arregloNumeros = []
        for (let index = 0; index < generateNumber; index++) {
            const randomNumber = Math.floor(Math.random() * max) + min
            arregloNumeros.push(randomNumber)
        }
        return arregloNumeros
    }

    const getPokemon = async (numbers) => {
        const url = 'https://pokeapi.co/api/v2/pokemon/'
        const fetchs = numbers.map((number) => {
            return fetch(url + number).then((data) => data.json())
        })

        const pokemon = await Promise.all(fetchs)
        setPokemon(pokemon)
    }

    useEffect(() => {
        // random numeros
        const pokemonNumbers = randomNumbers(1, totalPokemon, 3)
        getPokemon(pokemonNumbers)
    }, [])

    return (
        <Container className={theme === 'dark' ? 'text-light' : 'text-dark'}>
            <Row className="my-5">
                <Col>
                    <h1>Bienvenido a la Pokedex</h1>
                    <p>Explora y descubre información sobre tus Pokémon favoritos.</p>
                </Col>
            </Row>
            <PokemonContainer>
                {pokemon.map((pokemon) => {
                    return <PokemonCard key={`pokemon-${pokemon.name}`} pokemon={pokemon} />
                })}
            </PokemonContainer>
        </Container>
    );
};

export default Home;