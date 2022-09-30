import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InputSearch from './InputSearch';
import InputSearchPerType from './InputSearchPerType';
import PokemonCard from './PokemonCard';

const Pokemon = () => {

    const userName = useSelector(state => state.currentUserName)

    const [pokemons, setPokemons] = useState([])

    useEffect(()=>{
        
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=905`)
            .then(res => setPokemons(res.data.results))

    }, [])

    

    const [page, setPage] = useState(1);
        const unitsPerPage = 20;
            const lastPositionPokemon =  page * unitsPerPage;
                const firstPositionPokemon =  lastPositionPokemon - unitsPerPage ;
                    const pokemonList = pokemons.slice(firstPositionPokemon, lastPositionPokemon)

    const totalPage = Math.ceil(pokemons.length / unitsPerPage)

    let numbers = []

    const [indexButton, setIndexButton] = useState(1);
    const [totalButton, setTotalButton]= useState(10);

    for (let i = indexButton; i <= totalPage; i++) {
        if(i <= totalButton){
             numbers.push(i)
        }
    }

    const nextButton = () =>{

        setIndexButton(indexButton + 10)
        setTotalButton(totalButton + 10)
    
    }

    const prevButton = () =>{

        setIndexButton(indexButton - 10)
        setTotalButton(totalButton - 10)
    }
    
    const [displayPokeball, setDisplayPokeball] = useState(false)

    return (
        <div className='pokemon-are-container'>
            <div className='pokedex-logo-container'>
                <img className='pokedex-logo' src="./img/pokedex-logo.png" alt="pokedex-logo" />
                <img    className='pokeball-mid' 
                        onClick={()=> setDisplayPokeball(!displayPokeball)}  
                        src="./img/pokeball-btn-top.png" 
                        alt="pokeball-mid-top" 
                />
            </div>
            {
            displayPokeball&&
                <div className='search-container'>

                    <div className='inputs-container'>
                        <InputSearch setDisplayPokeball={setDisplayPokeball} setPokemons={setPokemons}/>
                    </div> 
                    
                    <div className='inputs-container'>
                        <InputSearchPerType
                            setDisplayPokeball={setDisplayPokeball}
                            setPokemons={setPokemons}
                            setPage={setPage}
                            setIndexButton={setIndexButton}
                            setTotalButton={setTotalButton}
                        />
                    </div>
                    
                </div>
            }

            <div className='pokeball-mid-bottom-container'>
                <img    className='pokeball-mid' 
                        onClick={()=> setDisplayPokeball(!displayPokeball)} 
                        src="./img/pokeball-btn-bottom.png" 
                        alt="pokeball-btn-bottom" 
                />
            </div>
           
            <div className='name-trainer-container'>
                <h1>Welcome <span className='name-trainer'>{userName}</span>, get ready for a great adventure.</h1>
            </div>
            
            <div className='items-cards-container' >
            {
                pokemonList.map(pokemon =>(
                    <PokemonCard url={pokemon.url} key={pokemon.url}/>
                ))
            }
            </div>

            <div className='btns-pagination-container'>
                <div className='pass-btns-container'>
                    <button 
                        className='btn-pass' 
                        onClick={prevButton}
                        disabled={numbers[0] === 1}
                    >
                        Prev
                    </button>
                </div>

                <div className='numbers-container'>
                    {
                        numbers.map(number => (
                            <button className='numbers' key={number} onClick={()=> setPage(number)}>{number}</button>
                        ))
                    }  
                </div>   

                <div className='pass-btns-container'>
                    <button 
                        className='btn-pass'
                        onClick={nextButton}
                        disabled={numbers.length < 10}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;