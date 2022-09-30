import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({url}) => {

    const [pokemon, setPokemon] = useState({})

    useEffect(()=> {
        axios.get(url)
            .then(res => setPokemon(res.data))
    }, [])

    const navigate = useNavigate()

    const typesPokemon =    [
                                {type: 'normal', color: '#735259'},
                                {type: 'fighting', color: '#96402A'},
                                {type: 'flying', color: '#DAEBF2'},
                                {type: 'poison', color: '#5B3184'},
                                {type: 'ground', color: '#654008'},
                                {type: 'rock', color: '#7E7E7E'},
                                {type: 'bug', color: '#4AB648'},
                                {type: 'ghost', color: '#323569'},
                                {type: 'steel', color: '#4F4F4F'},
                                {type: 'fire', color: '#E75C35'},
                                {type: 'water', color: '#1479FB'},
                                {type: 'grass', color: '#416460'}, ,
                                {type: 'electric', color: '#FFC75F'},
                                {type: 'psychic', color: '#D5CABD'},
                                {type: 'ice', color: '#6FBEDF'},
                                {type: 'dragon', color: '#478A93'},
                                {type: 'dark', color: '#030706'},
                                {type: 'fairy', color: '#971B45'},
                                {type: 'unknown', color: '#FBEAFF'},
                                {type: 'shadow', color: '#4B4453'}
                            ]                           

    const findType = (name)=>{
        if(name !== null){
        const typePokemon = typesPokemon.find(type => type?.type === name)                 
        return typePokemon
        }

    } 

    const findTypeOfPokemon = pokemon.types?.map(type => type.type.name);

    const typeFilter = findType(findTypeOfPokemon?.[0])


    return (
        <div  className='cards-container' onClick={()=> navigate(`/pokemon/${pokemon.id}`)}>
            <div className='cards'>
                 <h3 className='name-pokemon-card' style={{background: `${typeFilter?.color}`}}>{pokemon.name} <span>N° {pokemon.id}</span></h3>
                <div className='img-card-container' style={{background: `${typeFilter?.color}`}}>
                    <img className='img-pokemon-card' src={pokemon.sprites?.other['official-artwork'].front_default} alt="pokemon" />
                </div>
            </div>
           
        </div>
    );
};

export default PokemonCard;