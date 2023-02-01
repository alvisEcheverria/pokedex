import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PassButtons from './PassButtons';
import PokemonEvolutions from './PokemonEvolutions';

const PokemonDetails = () => {

    const { id } = useParams()

    const [pokemon, setPokemon] = useState({})
    const [speciesPokemon, setSpeciesPokemon] = useState({})
    const [movementPokemon, setMovementPokemon] = useState({})
    const [playCrie, setPlayCrie] = useState(true)
    const [toggleDetails, setToggleDetails] = useState(true)

    useEffect(() => {

        if(+id >= 1  && +id <= 905 || +id >= 10001 && +id <= 10249){
            
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
                .then(res => setPokemon(res.data))

            axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
                .then(res => setSpeciesPokemon(res.data))
        }

    }, [id])

    const playCriePokemon = () => {

        setPlayCrie(false)

        setTimeout(() => {
            setPlayCrie(true)
        }, 50)
    }

    const languageFilter = speciesPokemon.flavor_text_entries?.filter(language => language.language.name === 'en')
    const [bio, setBio] = useState('')
    const [bioDefault, setBioDefault] = useState(true)

    const searchVersion = (versionBio) => {
        setBio(versionBio)
        setBioDefault(false)
    }

    const getDetailsMovements = (moveUrl) => {

            if(moveUrl !== ''){
                axios.get(moveUrl)
                .then(res => setMovementPokemon(res.data))
            }
    }

    const languageMoveFilter = movementPokemon.flavor_text_entries?.filter(language => language.language.name === 'en')
    const lastMove = languageMoveFilter?.length -1;

    const statsPokemon =    [
                                {   
                                    id: 0,
                                    stat: +`${pokemon.stats?.[0].base_stat}` / 2.3,
                                    normalStat: `${pokemon.stats?.[0].base_stat}`
                                },
                                {   
                                    id: 1,
                                    stat: +`${pokemon.stats?.[1].base_stat}` / 2.3, 
                                    normalStat: `${pokemon.stats?.[1].base_stat}`
                                },
                                {   
                                    id: 2,
                                    stat: +`${pokemon.stats?.[2].base_stat}` / 2.3,
                                    normalStat: `${pokemon.stats?.[2].base_stat}`
                                },
                                {   
                                    id: 3,
                                    stat: +`${pokemon.stats?.[3].base_stat}` / 2.3,
                                    normalStat: `${pokemon.stats?.[3].base_stat}`
                                },
                                {   
                                    id: 4,
                                    stat: +`${pokemon.stats?.[4].base_stat}` / 2.3,
                                    normalStat: `${pokemon.stats?.[4].base_stat}`
                                },
                                {   
                                    id: 5,
                                    stat: +`${pokemon.stats?.[5].base_stat}` / 2.3,
                                    normalStat: `${pokemon.stats?.[5].base_stat}`
                                }
                            ]

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
    
    const typeFilter1 = findType(findTypeOfPokemon?.[0])
    const typeFilter2 = findType(findTypeOfPokemon?.[1])

    const filterTypeMove = findType(movementPokemon.type?.name)

    const powerStat = movementPokemon.power? `${movementPokemon.power / 2}%` : '35%' ;
    const movementPokemonTernario =  movementPokemon.power? `${movementPokemon.power}` : 'Unknown';
    const powerMovement = movementPokemon.power? 
        'linear-gradient(240deg, rgba(196, 40, 53,1) 90%, rgba(0,0,0,0) 10%)'
        :
        'linear-gradient(240deg, rgba(0, 0, 0,1) 90%, rgba(0,0,0,0) 10%)';

    const filterNormalAbility  =  pokemon.abilities?.filter(abilities => abilities.is_hidden === false)
    const filterSpecialAbility  =  pokemon.abilities?.find(abilities => abilities.is_hidden === true)

    return (
        <div className='pokemon-details-container'>
            <PassButtons />
            <div className='descriptions-pokemon-container'>
                <div className='items-left-pokemonDetail'>

                    <select className='select-bio' onChange={e => searchVersion(e.target.value)}>
                        <option value={`${languageFilter?.[0].flavor_text.replace(/\f/g, ' ')}`} >Select Version</option>
                        {
                            languageFilter?.map(versionBio => (
                                <option
                                    key={versionBio.version.url}
                                    value={versionBio.flavor_text.replace(/\f/g, ' ')}
                                >
                                    {versionBio.version.name}
                                </option>
                            ))
                        }
                    </select>

                    <div >
                            {
                                bioDefault ?
                                <div className='text-bio-container'>
                                    <p className='text-bio'>{languageFilter?.[0].flavor_text.replace(/\f/g, ' ')}</p>
                                </div>
                                    :
                                <div className='text-bio-container'>    
                                    <p className='text-bio'>{bio}</p>
                                </div>
                            }
                    </div>

                    <div className='name-pokemon-container'>
                            <h2 className='number-id'><span className='n-of-number'>N°</span>{pokemon.id}</h2>
                            <h1 className='name-pokemon'>{pokemon.name} </h1>
                    </div>  
                    <div className='container-pokemon-png'> 
                        <img onClick={playCriePokemon} className='pokemon-png'  
                        src={   pokemon.sprites?.other.home.front_default?
                                pokemon.sprites?.other.home.front_default
                                :
                                pokemon.sprites?.other['official-artwork'].front_default?
                                pokemon.sprites?.other['official-artwork'].front_default
                                :
                                pokemon.sprites?.versions['generation-vii']['ultra-sun-ultra-moon'].front_default?
                                pokemon.sprites?.versions['generation-vii']['ultra-sun-ultra-moon'].front_default
                                :
                                pokemon.sprites?.versions['generation-viii'].icons.front_default 
                            }
                            alt="pokemon" />
                            <img src="./img/poke.png" className='white-poke' alt="" />
                    </div>   
                    {
                        playCrie && 
                        <audio src={`./sound/pokemonCries/${id}.wav`} autoPlay></audio>
                    }
                    
                    <ul className='type-color-container'>
                        <div className='type-color'>
                            <li className='type-per-color' style={{background: `${typeFilter1?.color}`}}>{typeFilter1?.type}</li>
                            {
                                typeFilter2?.type && <li className='type-per-color' style={{background: `${typeFilter2?.color}`}}>{typeFilter2?.type}</li>
                            }
                        </div>
                    </ul>
                   
                </div>
                
                <div className='items-right-pokemonDetail'>
                    
                        <div className='movements-container'>
                            <button onClick={()=> setToggleDetails(!toggleDetails)} 
                                    className='movements'> 
                                    <span className='button-a'>A</span>{toggleDetails? 'Check Moves' : 'Check Stats'}
                            </button>
                        </div>
                    {
                    toggleDetails?
                    (
                    <>  
                        <div className='cs'>
                            <div className='habitat-container'>
                                    {
                                        speciesPokemon.habitat?.name ? 
                                        <p className='padding-habitat'>
                                            {speciesPokemon.habitat?.name} 
                                            <span className='habitat-color-span'>| Habitat</span>
                                        </p>

                                        :

                                        <p className='padding-habitat'>
                                            Unknown 
                                            <span className='habitat-color-span'>| Habitat</span>
                                        </p>   
                                    }
                            </div>
                        </div>

                        <ul className='base-points-container'>
                            <div className='left-points-container'>
                                {
                                    pokemon.stats?.map(stats=> (
                                        <li key={stats.stat.url} className='point-stat-name'>
                                            {stats.stat.name}
                                        </li>
                                    ))
                                }
                            </div>
                            <div className='right-points-container'>
                                {
                                    statsPokemon.map(stat => (
                                        <li key={stat.id} className='percentage-point-detail' 
                                            style={{ width: `${stat.stat}%`}}>
                                            <span className='stat-padding'>{stat.normalStat}</span> 
                                        </li>
                                    ))
                                }
                            </div>
                        </ul>

                        <PokemonEvolutions setBioDefault={setBioDefault} />
                    </>
                    )
                    :   
                    <>  
                    <ul className='type-color-abilities-container'>
                        {
                            filterNormalAbility.map(abilities =>(
                                <li key={abilities.ability.url} className='types-ability-normal-color'>
                                    {abilities.ability.name}
                                </li>
                            ))
                        }
                        {
                            filterSpecialAbility &&
                            <li className='types-ability-hidden-color'>{filterSpecialAbility?.ability.name}</li>
                        }
                        
                        <li className='types-abilities'>abilities</li>
                    </ul>

                    <div className='type-color-moves-container'>
                        <p className='type-per-color' style={{background: `${filterTypeMove?.color}`}}>
                            {filterTypeMove?.type}
                        </p>
                    </div>
                        
                        <ul className='power-container'>
                            <div className='percentage-power-container'>
                                <li className='percentage-power' style={{ width: `${powerStat}`, background: `${powerMovement}`}}>
                                    {movementPokemonTernario}
                                </li>
                            </div>
                            <li className='name-power'>
                                    Power
                            </li>
                        </ul>
                        
                        <div className='text-move-container'>
                            <p className='text-move'>{languageMoveFilter?.[lastMove]?.flavor_text}</p>
                        </div>
                      
                        <select className='select-moves' onChange={e => getDetailsMovements(e.target.value)}>
                            <option value="">Select Moves</option>
                           { 
                                pokemon.moves.map(moves => (
                                    <option key={moves.move.url} value={moves.move.url}>{moves.move.name}</option>
                                ))   
                            }
                        </select>
                    </>
                    }
                </div>
            </div>
        </div>
    );
};

export default PokemonDetails;