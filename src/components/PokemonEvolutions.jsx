import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PokemonEvolutions = ({setBioDefault}) => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [pokemonBase, setPokemonBase] = useState({})
        const [pokemonBaseId, setPokemonBaseId] = useState()

        const [pokemonEvolutionOne, setPokemonEvolutionOne] = useState({})
            const [pokemonEvolutionOneId, setPokemonEvolutionOneId] = useState()

                const [pokemonEvolutionTwo, setPokemonEvolutionTwo] = useState({})
                    const [pokemonEvolutionTwoId, setPokemonEvolutionTwoId] = useState()

        const [speciesPokemon, setSpeciesPokemon] = useState({})
            const [evolutionsChain, setEvolutionsChain] = useState({})

    useEffect(()=> {
        if(+id >= 1 && +id <= 905 || +id >= 10001 && +id <= 10249){
            axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
                .then(res => setSpeciesPokemon(res.data))
        }
    }, [id])      

    useEffect(() =>{

        if(speciesPokemon.evolution_chain?.url){
           axios.get(speciesPokemon.evolution_chain?.url)
            .then(res => setEvolutionsChain(res.data.chain))
        }

    }, [speciesPokemon])

    useEffect(()=> {

        if(evolutionsChain.species?.url){
            axios.get(evolutionsChain.species?.url)
                .then(res => setPokemonBaseId(res.data.id))
        }
        if(evolutionsChain.evolves_to?.[0]?.species.url){
            axios.get(evolutionsChain.evolves_to?.[0]?.species.url)
                .then(res => setPokemonEvolutionOneId(res.data.id))
        }

        if(evolutionsChain.evolves_to?.[0]?.evolves_to[0]?.species.url){
            axios.get(evolutionsChain.evolves_to?.[0]?.evolves_to[0]?.species.url)
                .then(res => setPokemonEvolutionTwoId(res.data.id))
        }

    }, [evolutionsChain])

    useEffect(()=> {

            if(pokemonBaseId){
                axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonBaseId}/`)
                .then(res => setPokemonBase(res.data))
            }
            
            if(pokemonEvolutionOneId){
                axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonEvolutionOneId}/`)
                    .then(res => setPokemonEvolutionOne(res.data))   
            }
            
            if(pokemonEvolutionTwoId){
                 axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonEvolutionTwoId}/`)
                    .then(res => setPokemonEvolutionTwo(res.data))
            }
        
    }, [pokemonBaseId, pokemonEvolutionOneId, pokemonEvolutionTwoId ])

    return (
            
            <ul className='evolutions-container'>
                <div className='pokemon-base-container'>
                    {  
                       speciesPokemon.evolution_chain?.url&&
                        <>
                            <div className='name-evolution-pokemon-container'>
                                <li className='n-of-number-evolutions'>N°</li>
                                <li className='pokemon-evolution-id'>{pokemonBase.id}</li>
                                <li className='name-pokemon-evolution'>{pokemonBase.species?.name}</li>
                            </div>
                            <img onClick={()=>  navigate(`/pokemon/${pokemonBase.id}`,
                                                setBioDefault(true))} className='evolutions-pokemon-png' 
                                                src={   pokemonBase.sprites?.other.home.front_default?
                                                        pokemonBase.sprites?.other.home.front_default
                                                        :
                                                        pokemonBase.sprites?.other['official-artwork'].front_default?
                                                        pokemonBase.sprites?.other['official-artwork'].front_default
                                                        :
                                                        pokemonBase.sprites?.versions['generation-vii']['ultra-sun-ultra-moon'].front_default?
                                                        pokemonBase.sprites?.versions['generation-vii']['ultra-sun-ultra-moon'].front_default
                                                        :
                                                        pokemonBase.sprites?.versions['generation-viii'].icons.front_default
                                                        
                                                    }
                                                alt="pokemon"
                            />
                        </>
                    }
                </div>
                 <div className='pokemon-evolution-one-container'>
                    {   speciesPokemon.evolution_chain?.url&&
                        evolutionsChain.evolves_to?.[0]?.species.url&&
                        <>  
                            <div className='name-evolution-pokemon-container'>
                                <li className='n-of-number-evolutions'>N°</li>
                                <li className='pokemon-evolution-id'>{pokemonEvolutionOne?.id}</li>
                                <li className='name-pokemon-evolution'>{pokemonEvolutionOne.species?.name}</li>
                            </div>
                            <img    onClick={()=> navigate(`/pokemon/${pokemonEvolutionOne.id}`,
                                    setBioDefault(true))} className='evolutions-pokemon-png' 
                                    src={   pokemonEvolutionOne.sprites?.other.home.front_default?
                                            pokemonEvolutionOne.sprites?.other.home.front_default
                                            :
                                            pokemonEvolutionOne.sprites?.other['official-artwork'].front_default?
                                            pokemonEvolutionOne.sprites?.other['official-artwork'].front_default
                                            :
                                            pokemonEvolutionOne.sprites?.versions['generation-vii']['ultra-sun-ultra-moon'].front_default?
                                            pokemonEvolutionOne.sprites?.versions['generation-vii']['ultra-sun-ultra-moon'].front_default
                                            :
                                            pokemonEvolutionOne.sprites?.versions['generation-viii'].icons.front_default
                                        } 
                                    alt="pokemon" 
                            />
                        </>
                    }
                </div> 
                <div className='pokemon-evolution-two-container'>
                    {   speciesPokemon.evolution_chain?.url&&
                        evolutionsChain.evolves_to?.[0]?.evolves_to[0]?.species.url&&
                        <>  
                            <div className='name-evolution-pokemon-container'>
                                <li className='n-of-number-evolutions'>N°</li>
                                <li className='pokemon-evolution-id'>{pokemonEvolutionTwo.id}</li>
                                <li className='name-pokemon-evolution'>{pokemonEvolutionTwo.species?.name}</li>
                            </div>
                            <img onClick={()=>  navigate(`/pokemon/${pokemonEvolutionTwo.id}`,
                                                setBioDefault(true))} 
                                                className='evolutions-pokemon-png' 
                                                src={   pokemonEvolutionTwo.sprites?.other.home.front_default?
                                                        pokemonEvolutionTwo.sprites?.other.home.front_default
                                                        :
                                                        pokemonEvolutionTwo.sprites?.other['official-artwork'].front_default?
                                                        pokemonEvolutionTwo.sprites?.other['official-artwork'].front_default
                                                        :
                                                        pokemonEvolutionTwo.sprites?.versions['generation-vii']['ultra-sun-ultra-moon'].front_default?
                                                        pokemonEvolutionTwo.sprites?.versions['generation-vii']['ultra-sun-ultra-moon'].front_default
                                                        :
                                                        pokemonEvolutionTwo.sprites?.versions['generation-viii'].icons.front_default
                                                    } 
                                                alt="pokemon" 
                            />   
                        </>
                    }
                </div>
            </ul>
    );
};

export default PokemonEvolutions;