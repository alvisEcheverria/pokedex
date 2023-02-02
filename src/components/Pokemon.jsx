import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import InputSearch from './InputSearch';
import InputSearchPerType from './InputSearchPerType';
import PokemonCard from './PokemonCard';
import soundClick from '../assets/sounds-effects/sound-click.mp3';
import MiniGameList from './MiniGameList';

const Pokemon = () => {

    const userName = useSelector(state => state.currentUserName)

    const [pokemons, setPokemons] = useState([])

    useEffect(()=>{

            axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10249`)
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
    
    const [displayPokeball, setDisplayPokeball] = useState(false);

    const [ game, setGame ] = useState(false);

    const [selected, setSelected] = useState('')

    const numberSelected = (number)=>{
        setPage(number);
        setSelected('number-selected');
    }

    const showGame = () =>{
        setGame(!game) 
        setDisplayPokeball(false)
    }

    return (
        <div className='pokemons-area-container'>
            <audio src={soundClick} autoPlay/>
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
                    <div className='item-a'>
                        <InputSearch 
                            setDisplayPokeball={setDisplayPokeball} 
                            setPokemons={setPokemons}
                            setGame={setGame}
                        />
                        <div className='btn-minigame-container'>
                            <button onClick={showGame}>Mini Game</button>
                        </div>
                    </div> 
                    <div className='item-b'>
                        <InputSearchPerType
                            setDisplayPokeball={setDisplayPokeball}
                            setPokemons={setPokemons}
                            setPage={setPage}
                            setIndexButton={setIndexButton}
                            setTotalButton={setTotalButton}
                            setGame={setGame}
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
           
            {
                game?
                    <div className='name-trainer-container'>
                        <h1>Hey <span className='name-trainer'>{userName}</span>, gotta catch 'em all!</h1>
                    </div>
                :
                    <div className='name-trainer-container'>
                        <h1>Welcome <span className='name-trainer'>{userName}</span>, get ready for a great adventure.</h1>
                    </div>
            }
            
            {
                game?
                    <MiniGameList setGame={setGame}/>
            :
                <ul className='items-cards-container'>
                        {
                            pokemonList.map(pokemon =>(
                                <li className='cards-container' key={pokemon.url}>
                                    <PokemonCard url={pokemon.url}/>
                                </li>
                            ))
                        }
                </ul>
            }
            {
                !game &&
                <div className='btns-pagination-container'>
                    <button 
                        className='btn-pass' 
                        onClick={prevButton}
                        disabled={numbers[0] === 1}
                    >
                        Prev
                    </button>

                    {
                        numbers.map(number => (
                            <button className={`numbers ${number === page && selected}`} key={number} onClick={()=> numberSelected(number)}>{number}</button>
                        ))
                    }  
                    <button 
                        className='btn-pass'
                        onClick={nextButton}
                        disabled={numbers.length < 10}
                    >
                        Next
                    </button>
                </div>
            }
        </div>
    );
};

export default Pokemon;