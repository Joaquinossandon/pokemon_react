import { createContext, useContext, useEffect, useState } from "react";

const CatchPokemonContext = createContext();

const CatchPokemonProvider = ({ children }) => {
    const [pokedex, setPokedex] = useState([])
    const [total, setTotal] = useState(0)

    const addPokemon = (pokemon) => {
        setPokedex((prevPokedex) => [...prevPokedex, pokemon])
    }

    const calcularTotal = () => {
        setTotal(pokedex.reduce((prev, curr) => {
            return prev + curr.id
        }, 0))
    }

    useEffect(() => {
        calcularTotal()
    }, [pokedex])

    return (
        <CatchPokemonContext.Provider value={{ pokedex, addPokemon, total }}>
            {children}
        </CatchPokemonContext.Provider>
    )
}

export const useCatchPokemon = () => useContext(CatchPokemonContext)

export default CatchPokemonProvider