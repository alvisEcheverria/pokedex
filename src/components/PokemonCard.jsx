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
                                {type: 'normal', 
                                    color_card: 'linear-gradient(0deg, rgba(100,71,77,1) 25%, rgba(115,82,89,1) 41%, rgba(130,93,101,0.8) 62%, rgba(145,103,112,0.5) 75%, rgba(157,117,125,0) 89%)', 
                                        symbol: './img/types/normal.png',
                                            name_card: 'linear-gradient(315deg, rgba(100,71,77,1) 25%, rgba(115,82,89,1) 41%, rgba(130,93,101,1) 62%, rgba(145,103,112,1) 78%, rgba(157,117,125,1) 89%)',
                                                texture_card: '../public/img/texture_cards/normal.jpg',
                                                    name_card_content: 'linear-gradient(0deg, rgba(100,71,77,1) 25%, rgba(115,82,89,1) 41%, rgba(130,93,101,1) 62%, rgba(145,103,112,1) 75%, rgba(255,255,255,1) 89%)'},
                                {type: 'fighting', 
                                    color_card: 'linear-gradient(0deg, rgba(130,56,36,1) 25%, rgba(150,64,42,1) 41%, rgba(170,73,48,0.5) 62%, rgba(170,73,48,0.3) 75%, rgba(170,73,48,0) 89%)',
                                        symbol: './img/types/fighting.png',
                                            name_card: 'linear-gradient(315deg, rgba(130,56,36,1) 25%, rgba(150,64,42,1) 41%, rgba(170,73,48,1) 62%, rgba(170,73,48,1) 89%)',
                                                texture_card: '../public/img/texture_cards/fighting.jpg',
                                                    name_card_content: 'linear-gradient(0deg, rgba(130,56,36,1) 25%, rgba(150,64,42,1) 41%, rgba(170,73,48,1) 62%, rgba(170,73,48,1) 75%, rgba(255,255,255,1) 89%)'},
                                {type: 'flying', color_card: '#DAEBF2'},
                                {type: 'poison', 
                                    color_card: 'linear-gradient(0deg, rgba(78,42,113,1) 25%, rgba(91,49,132,1) 41%, rgba(104,56,151,1) 62%, rgba(117,63,169,0.5) 75%, rgba(129,71,187,0) 89%)',
                                        symbol: './img/types/poison.png',
                                            name_card: 'linear-gradient(315deg, rgba(78,42,113,1) 25%, rgba(91,49,132,1) 41%, rgba(104,56,151,1) 62%, rgba(117,63,169,1) 78%, rgba(129,71,187,1) 89%)',
                                                texture_card: '../public/img/texture_cards/poison.jpg',
                                                    name_card_content:'linear-gradient(0deg, rgba(78,42,113,1) 25%, rgba(91,49,132,1) 41%, rgba(104,56,151,1) 62%, rgba(117,63,169,1) 75%, rgba(255,255,255,1) 89%)'},
                                {type: 'ground', 
                                    color_card: 'linear-gradient(0deg, rgba(77,49,6,1) 25%, rgba(101,64,8,1) 41%, rgba(125,79,10,0.5) 62%, rgba(148,94,12,0.3) 75%, rgba(172,109,14,0) 89%)',
                                        symbol:  './img/types/ground.png',
                                            name_card: 'linear-gradient(315deg, rgba(77,49,6,1) 25%, rgba(101,64,8,1) 41%, rgba(125,79,10,1) 62%, rgba(148,94,12,1) 78%, rgba(172,109,14,1) 89%)',
                                                texture_card: '../public/img/texture_cards/ground.webp',
                                                    name_card_content: 'linear-gradient(0deg, rgba(77,49,6,1) 25%, rgba(101,64,8,1) 41%, rgba(125,79,10,1) 62%, rgba(148,94,12,1) 75%, rgba(255,255,255,1) 89%)'},
                                {type: 'rock', 
                                    color_card: 'linear-gradient(0deg, rgba(113,113,113,1) 25%, rgba(126,126,126,1) 41%, rgba(139,139,139,1) 62%, rgba(152,152,152,0.5) 75%, rgba(164,164,164,0) 89%)',
                                        symbol: './img/types/rock.png',
                                            name_card: 'linear-gradient(315deg, rgba(113,113,113,1) 25%, rgba(126,126,126,1) 41%, rgba(139,139,139,1) 62%, rgba(152,152,152,1) 78%, rgba(164,164,164,1) 89%)',
                                                texture_card: '../public/img/texture_cards/rock.jpg',
                                                    name_card_content: 'linear-gradient(0deg, rgba(113,113,113,1) 25%, rgba(126,126,126,1) 41%, rgba(139,139,139,1) 62%, rgba(152,152,152,1) 75%, rgba(255,255,255,1) 89%)'},
                                {type: 'bug', 
                                    color_card: 'linear-gradient(0deg, rgba(67,164,65,1) 25%, rgba(74,182,72,1) 41%, rgba(74,182,72,0.5) 62%, rgba(110,197,108,0.3) 75%, rgba(128,204,126,0) 89%)',
                                        symbol: './img/types/bug.png',
                                            name_card: 'linear-gradient(315deg, rgba(67,164,65,1) 25%, rgba(74,182,72,1) 41%, rgba(74,182,72,1) 62%, rgba(110,197,108,1) 78%, rgba(128,204,126,1) 89%)',
                                                texture_card: '../public/img/texture_cards/bug.jpg',
                                                    name_card_content: 'linear-gradient(0deg, rgba(67,164,65,1) 25%, rgba(74,182,72,1) 41%, rgba(74,182,72,1) 62%, rgba(110,197,108,1) 75%, rgba(255,255,255,1) 89%)'},
                                {type: 'ghost', 
                                    color_card: 'linear-gradient(0deg, rgba(42,44,88,1) 25%, rgba(50,53,105,1) 41%, rgba(58,62,122,0.5) 62%, rgba(66,70,140,0.3) 75%, rgba(75,79,157,0) 89%)',
                                        symbol: './img/types/ghost.png',
                                            name_card: 'linear-gradient(315deg, rgba(42,44,88,1) 25%, rgba(50,53,105,1) 41%, rgba(58,62,122,1) 62%, rgba(66,70,140,1) 78%, rgba(75,79,157,1) 89%)',
                                                texture_card: '../public/img/texture_cards/ghost.jpg',
                                                    name_card_content: 'linear-gradient(0deg, rgba(42,44,88,1) 25%, rgba(50,53,105,1) 41%, rgba(58,62,122,1) 62%, rgba(66,70,140,1) 75%, rgba(255,255,255,1) 89%)'}, 
                                {type: 'steel', 
                                    color_card: 'linear-gradient(0deg, rgba(66,66,66,1) 25%, rgba(79,79,79,1) 41%, rgba(92,92,92,1) 62%, rgba(105,105,105,0.5) 75%, rgba(117,117,117,0) 89%)',
                                        symbol: './img/types/steel.png',
                                            name_card: 'linear-gradient(315deg, rgba(66,66,66,1) 25%, rgba(79,79,79,1) 41%, rgba(92,92,92,1) 62%, rgba(105,105,105,1) 78%, rgba(117,117,117,1) 89%)',
                                                texture_card: '../public/img/texture_cards/steel.jpg',
                                                    name_card_content: 'linear-gradient(0deg, rgba(66,66,66,1) 25%, rgba(79,79,79,1) 41%, rgba(92,92,92,1) 62%, rgba(105,105,105,1) 75%, rgba(255,255,255,1) 89%)'},
                                {type: 'fire', 
                                    color_card: 'linear-gradient(0deg, rgba(228,74,30,1) 25%, rgba(231,92,53,1) 41%, rgba(234,110,76,0.5) 62%, rgba(236,129,99,0.3) 75%, rgba(239,147,121,0) 89%)',
                                        symbol: './img/types/fire.png',
                                            name_card: 'linear-gradient(315deg, rgba(228,74,30,1) 25%, rgba(231,92,53,1) 41%, rgba(234,110,76,1) 62%, rgba(236,129,99,1) 78%, rgba(239,147,121,1) 89%)',
                                                texture_card: '../public/img/texture_cards/fire.jpg',
                                                    name_card_content: 'linear-gradient(0deg, rgba(228,74,30,1) 25%, rgba(231,92,53,1) 41%, rgba(234,110,76,1) 62%, rgba(236,129,99,1) 75%, rgba(255,255,255,1) 89%)'},
                                {type: 'water', 
                                    color_card: 'linear-gradient(0deg, rgba(4,108,241,1) 25%, rgba(20,121,251,0.7) 41%, rgba(45,135,251,0.5) 62%, rgba(70,150,252,0.3) 75%, rgba(95,164,252,0) 89%)',
                                        symbol: './img/types/water.png',
                                            name_card: 'linear-gradient(315deg, rgba(4,108,241,1) 25%, rgba(20,121,251,1) 41%, rgba(45,135,251,1) 62%, rgba(70,150,252,1) 78%, rgba(95,164,252,1) 89%)',
                                                texture_card: '../public/img/texture_cards/water.jpg',
                                                    name_card_content: 'linear-gradient(0deg, rgba(4,108,241,1) 25%, rgba(20,121,251,1) 41%, rgba(45,135,251,1) 62%, rgba(70,150,252,1) 75%, rgba(255,255,255,1) 89%)'},
                                {type: 'grass', 
                                    color_card: 'linear-gradient(0deg, rgba(55,85,81,1) 25%, rgba(65,100,96,1) 41%, rgba(75,115,111,0.5) 62%, rgba(85,131,126,0.3) 75%, rgba(255,255,255,0) 89%)',
                                        symbol: './img/types/grass.png',
                                            name_card: 'linear-gradient(315deg, rgba(55,85,81,1) 25%, rgba(65,100,96,1) 41%, rgba(75,115,111,1) 62%, rgba(85,131,126,1) 78%, rgba(95,146,141,1) 89%)',
                                                texture_card: '../public/img/texture_cards/grass.jpg',
                                                    name_card_content: 'linear-gradient(0deg, rgba(55,85,81,1) 25%, rgba(65,100,96,1) 41%, rgba(75,115,111,1) 62%, rgba(85,131,126,1) 75%, rgba(255,255,255,1) 89%)'},
                                {type: 'electric', 
                                    color_card: 'linear-gradient(0deg, rgba(249,161,0,1) 25%, rgba(255,172,19,1) 41%, rgba(255,181,45,0.5) 62%, rgba(255,190,70,0.3) 75%, rgba(255,199,96,0) 89%)',
                                        symbol: './img/types/electric.png',
                                            name_card: 'linear-gradient(315deg, rgba(249,161,0,1) 25%, rgba(255,172,19,1) 41%, rgba(255,181,45,1) 62%, rgba(255,190,70,1) 78%, rgba(255,199,96,1) 89%)',
                                                texture_card: '../public/img/texture_cards/electric.jpg',
                                                    name_card_content: 'linear-gradient(0deg, rgba(249,161,0,1) 25%, rgba(255,172,19,1) 41%, rgba(255,181,45,1) 62%, rgba(255,190,70,1) 75%, rgba(255,255,255,1) 89%)'},
                                {type: 'psychic', 
                                    color_card: 'linear-gradient(0deg, rgba(203,189,173,1) 25%, rgba(213,202,189,1) 41%, rgba(223,215,205,0.5) 62%, rgba(233,227,220,0.3) 75%, rgba(243,240,236,0) 89%)',
                                        symbol: './img/types/psychic.png',
                                            name_card: 'linear-gradient(315deg, rgba(203,189,173,1) 25%, rgba(213,202,189,1) 41%, rgba(223,215,205,1) 62%, rgba(233,227,220,1) 78%, rgba(243,240,236,1) 89%)',
                                                texture_card: '../public/img/texture_cards/psychic.webp',
                                                    name_card_content: 'linear-gradient(0deg, rgba(203,189,173,1) 25%, rgba(213,202,189,1) 41%, rgba(223,215,205,1) 62%, rgba(233,227,220,1) 75%, rgba(255,255,255,1) 89%)'},
                                {type: 'ice', 
                                    color_card: 'linear-gradient(0deg, rgba(90,181,218,1) 25%, rgba(111,190,223,1) 41%, rgba(132,199,228,0.5) 62%, rgba(153,209,232,0.3) 75%, rgba(174,218,237,0) 89%)',
                                        symbol: './img/types/ice.png',
                                            name_card: 'linear-gradient(315deg, rgba(90,181,218,1) 25%, rgba(111,190,223,1) 41%, rgba(132,199,228,1) 62%, rgba(153,209,232,1) 78%, rgba(174,218,237,1) 89%)',
                                                texture_card: '../public/img/texture_cards/ice.jpg',
                                                    name_card_content: 'linear-gradient(0deg, rgba(90,181,218,1) 25%, rgba(111,190,223,1) 41%, rgba(132,199,228,1) 62%, rgba(153,209,232,1) 75%, rgba(255,255,255,1) 89%)'},
                                {type: 'dragon', 
                                    color_card: 'linear-gradient(0deg, rgba(130,0,0,1) 25%, rgba(155,0,0,1) 41%, rgba(181,0,0,0.5) 62%, rgba(206,0,0,0.3) 75%, rgba(232,0,0,0) 89%)',
                                        symbol: './img/types/dragon.png',
                                            name_card: 'linear-gradient(315deg, rgba(130,0,0,1) 25%, rgba(155,0,0,1) 41%, rgba(181,0,0,1) 62%, rgba(206,0,0,1) 78%, rgba(232,0,0,1) 89%)',
                                                texture_card: '../public/img/texture_cards/dragon.jpg',
                                                    name_card_content: 'linear-gradient(0deg, rgba(130,0,0,1) 25%, rgba(155,0,0,1) 41%, rgba(181,0,0,1) 62%, rgba(206,0,0,1) 75%, rgba(255,255,255,1) 89%)'},
                                {type: 'dark', 
                                    color_card: 'linear-gradient(0deg, rgba(0,0,0,1) 25%, rgba(3,7,6,1) 41%, rgba(11,25,21,0.5) 62%, rgba(18,43,37,0.3) 75%, rgba(26,61,52,0) 89%)',
                                        symbol: './img/types/dark.png',
                                            name_card:'linear-gradient(315deg, rgba(0,0,0,1) 25%, rgba(3,7,6,1) 41%, rgba(11,25,21,1) 62%, rgba(18,43,37,1) 78%, rgba(26,61,52,1) 89%)',
                                                color_name: 'whitesmoke',
                                                    texture_card: '../public/img/texture_cards/dark.jpg',
                                                        name_card_content: 'linear-gradient(0deg, rgba(0,0,0,1) 25%, rgba(3,7,6,1) 41%, rgba(11,25,21,1) 62%, rgba(18,43,37,1) 75%, rgba(255,255,255,1) 89%)'},
                                {type: 'fairy', 
                                    color_card: 'linear-gradient(0deg, rgba(129,23,59,1) 25%, rgba(151,27,69,1) 41%, rgba(173,31,79,0.5) 62%, rgba(194,35,89,0.3) 75%, rgba(216,39,99,0) 89%)',
                                        symbol: './img/types/fairy.png',
                                            name_card: 'linear-gradient(315deg, rgba(129,23,59,1) 25%, rgba(151,27,69,1) 41%, rgba(173,31,79,1) 62%, rgba(194,35,89,1) 78%, rgba(216,39,99,1) 89%)',
                                                texture_card: '../public/img/texture_cards/fairy.jpg',
                                                    name_card_content: 'linear-gradient(0deg, rgba(129,23,59,1) 25%, rgba(151,27,69,1) 41%, rgba(173,31,79,1) 62%, rgba(194,35,89,1) 75%, rgba(255,255,255,1) 89%)'},
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

    const [toggleCard, setToggleCard] = useState(true)

    //console.log(pokemon)

    return (
            <>
                {
                toggleCard?
            <div className='cards' style={{backgroundImage: `url(${typeFilter?.texture_card})`}}>
                <div className='name-sym-content' style={{background: `${typeFilter?.name_card_content}`}}>
                    <h3 className='name-descrip' style={{background: `${typeFilter?.name_card}`, color: `${typeFilter?.color_name}`}}>
                        {pokemon.species?.name}
                    </h3>
                    <div className='num-sym'>
                        <p style={ +pokemon.id > 905 ? {fontSize: '1.6rem'} : null}> <span className='n-of-number-card'>N°</span> {pokemon.id}</p>
                        <img className='type-symbol' src={typeFilter?.symbol} alt="type-symbol" onClick={()=> setToggleCard(!toggleCard)}/>
                    </div>
                    
                </div>
                <div    className='img-card-container' 
                        style={{background: `${typeFilter?.color_card}`}}
                        onClick={()=> navigate(`/pokemon/${pokemon.id}`)}
                >
                    <img className='img-pokemon-card' src={ pokemon.sprites?.other['official-artwork'].front_default?
                                                                pokemon.sprites?.other['official-artwork'].front_default
                                                                :
                                                                pokemon.sprites?.other.home.front_default?
                                                                pokemon.sprites?.other.home.front_default
                                                                :
                                                                pokemon.sprites?.versions['generation-vii']['ultra-sun-ultra-moon'].front_default?
                                                                pokemon.sprites?.versions['generation-vii']['ultra-sun-ultra-moon'].front_default
                                                                :
                                                                pokemon.sprites?.versions['generation-viii'].icons.front_default
                                                                
                                                            } 
                                                            alt="pokemon" 
                                                            />
                </div>
            </div>
            :
                <img className='card_back' src="./img/card_back_side.png" alt="card-back-side" onClick={()=> setToggleCard(!toggleCard)}/>
            }
            </>
    );
};

export default PokemonCard;