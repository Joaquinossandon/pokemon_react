import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "./UserContext";

const CatchPokemonContext = createContext();

const CatchPokemonProvider = ({ children }) => {
    const [pokedex, setPokedex] = useState([])
    const [total, setTotal] = useState(0)
    const { token } = useUser()

    const addPokemon = (pokemon) => {
        setPokedex((prevPokedex) => [...prevPokedex, pokemon.name])
    }

    const calcularTotal = () => {
        setTotal(pokedex.reduce((prev, curr) => {
            return prev + curr.id
        }, 0))
    }

    const checkout = async () => {
        const res = await fetch("http://localhost:3000/catch", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                catched: pokedex
            }),
        });
        const data = await res.json();
        console.log(data)
        if (res.status == 200) {
            alert("Pokemones capturados")
        } else {
            alert("Hubo un problema")
        }
    }

    useEffect(() => {
        calcularTotal()
    }, [pokedex])

    return (
        <CatchPokemonContext.Provider value={{ pokedex, addPokemon, total, checkout }}>
            {children}
        </CatchPokemonContext.Provider>
    )
}

export const useCatchPokemon = () => useContext(CatchPokemonContext)

export default CatchPokemonProvider