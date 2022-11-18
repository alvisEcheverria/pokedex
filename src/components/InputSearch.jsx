import axios from 'axios';
import React, { useEffect, useState } from 'react';

const InputSearch = ({setPokemons, setDisplayPokeball}) => {

    const [pokemonInput, setPokemonInput] = useState('')
        const [pokemonsToSearch, setPokemonsToSearch] = useState([])

    const searchPokemon = (pokemonFilter) =>{

        const arrayPokemon = [pokemonFilter]
        setPokemons(arrayPokemon)
        setPokemonInput('')
        setDisplayPokeball(false)
    }

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10249`)
            .then(res => setPokemonsToSearch(res.data.results))
    }, [])

    let pokemonFilter = []

    if(!pokemonInput){
        pokemonFilter = []
    }
    else{
             pokemonFilter =  pokemonsToSearch.filter(pokemon => pokemon.name.toLocaleLowerCase().includes(pokemonInput.toLocaleLowerCase()))
           
    }

    return (
        <div>
            <form className='form-search-container' onSubmit={searchPokemon}>
                <input className='input-search'
                    type="text"
                    placeholder='Search Pokemon' 
                    value={pokemonInput}
                    onChange={e => setPokemonInput(e.target.value)}
                />
            </form>
            <div className='search-pokemon-container'>
                {
                    pokemonInput !== '' &&
                    <ul className='search-pokemon-list-container'>
                        {
                            pokemonFilter?.map(pokemon => (
                                <li className='pokemon-list-search' 
                                    key={pokemon.url} onClick={()=> searchPokemon(pokemon)}
                                >
                                     {pokemon.name}
                                </li>
                            )) 
                        }
                    </ul>
                }
                
            </div>
        </div>
                
    );
};

export default InputSearch;