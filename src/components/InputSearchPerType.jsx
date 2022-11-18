import axios from 'axios';
import React, { useEffect, useState } from 'react';

const InputSearchPerType = ({setPokemons, setPage, setIndexButton, setTotalButton, setDisplayPokeball}) => {

    const [types, setTypes] = useState([])

    useEffect(()=>{

        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setTypes(res.data.results))
            
    }, [])

    const searchPerType = (typeUrl)=>{   

        if(typeUrl === 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=11000'){
            axios.get(typeUrl)
                .then(res => setPokemons(res.data.results))
                setPage(1)
                setIndexButton(1)
                setTotalButton(10)
                setDisplayPokeball(false)
        }
        else if(typeUrl === ''){
            null
        }
        else{
            axios.get(typeUrl)
                .then(res => setPokemons(res.data.pokemon.map(pokemon => pokemon.pokemon)))
                setPage(1)
                setIndexButton(1)
                setTotalButton(10)
                setDisplayPokeball(false)
        }   
    }

    return (
        <div className='select-pokemon-container'>
             <select className='select-pokemon' onChange={e => searchPerType(e.target.value)}>
                <option className='option-select-default' value="">Select a type of pokemon </option>
                <option className='option-select' value={'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=11000'}> All</option>
                {
                     types.map(type =>(
                        <option className='option-select' value={type.url} key={type.url}>
                            {type.name}
                        </option>
                     ))   
                }
            </select>
        </div>
    );
};

export default InputSearchPerType;