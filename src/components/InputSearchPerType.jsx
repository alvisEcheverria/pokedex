import axios from 'axios';
import React, { useEffect, useState } from 'react';

const InputSearchPerType = ({setPokemons, setPage, setIndexButton, setTotalButton, setDisplayPokeball, setGame}) => {

    const [types, setTypes] = useState([]);

    const typesOfPokemon = [
        {
            type: "./img/types/normal.png",
            url: types[0]?.url
        },
        {
            type: "./img/types/fighting.png",
            url: types[1]?.url
        },
        {
            type: "./img/types/flying.png",
            url: types[2]?.url
        },
        {
            type: "./img/types/poison.png",
            url: types[3]?.url
        }, 
        {
            type: "./img/types/ground.png", 
            url: types[4]?.url
        },
        {
            type: "./img/types/rock.png",
            url: types[5]?.url 
        }, 
        {
            type: "./img/types/bug.png",
            url: types[6]?.url 
        },
        {
            type: "./img/types/ghost.png",
            url: types[7]?.url
        }, 
        {
            type: "./img/types/steel.png",
            url: types[8]?.url 
        },
        {
            type: "./img/types/fire.png",
            url: types[9]?.url 
        },
        {
            type: "./img/types/water.png",
            url: types[10]?.url
        },
        {
            type: "./img/types/grass.png",
            url: types[11]?.url 
        }, 
        {
            type: "./img/types/electric.png",
            url: types[12]?.url 
        },
        {
            type: "./img/types/psychic.png",
            url: types[13]?.url  
        }, 
        {
            type: "./img/types/ice.png",
            url: types[14]?.url 
        },
        {
            type: "./img/types/dragon.png",
            url: types[15]?.url   
        }, 
        {
            type: "./img/types/dark.png",
            url: types[16]?.url 
        },
        {
            type: "./img/types/fairy.png",
            url: types[17]?.url  
        }
    ]

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
                setGame(false)
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
                setGame(false)
        }   
    }

    return (
        <div className='symbol-container'>
            {
                typesOfPokemon.map(type =>(
                    <div className='symbol-item'>
                        <img className='symbol-img' src={type.type} alt="" onClick={()=> searchPerType(type.url)} key={type.url}/>
                    </div>
                ))
            }
        </div>
    );
};

export default InputSearchPerType;