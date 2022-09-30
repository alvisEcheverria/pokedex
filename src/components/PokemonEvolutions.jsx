import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PokemonEvolutions = ({setBioDefault}) => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [pokemonBase, setPokemonBase] = useState({})
        const [pokemonEvolutionOne, setPokemonEvolutionOne] = useState({})
            const [pokemonEvolutionTwo, setPokemonEvolutionTwo] = useState({})

        const [speciesPokemon, setSpeciesPokemon] = useState({})
            const [evolutionsChain, setEvolutionsChain] = useState({})
            console.log(pokemonEvolutionOne)

    const evolutionNamesPerPokemon =    {
                                            pokemonBase: evolutionsChain.species?.name, 
                                            pokemonEvolutionOne: evolutionsChain.evolves_to?.[0]?.species.name ,
                                            pokemonEvolutionTwo: evolutionsChain.evolves_to?.[0]?.evolves_to[0]?.species.name
                                        }

    useEffect(()=> {

        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
            .then(res => setSpeciesPokemon(res.data))

    }, [id])

    useEffect(() =>{

        axios.get(speciesPokemon.evolution_chain?.url)
            .then(res => setEvolutionsChain(res.data.chain))
                .catch(err => console.log(err.response))
                    
    }, [speciesPokemon])

    useEffect(()=> {
        
        if(evolutionNamesPerPokemon.pokemonBase){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${evolutionNamesPerPokemon.pokemonBase}/`)
                .then(res => setPokemonBase(res.data))
                    .catch(err => console.log(err.response))
        }
        
        if(evolutionNamesPerPokemon.pokemonEvolutionOne){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${evolutionNamesPerPokemon.pokemonEvolutionOne}/`)
                .then(res => setPokemonEvolutionOne(res.data)) 
                    .catch(err => console.log(err.response))
        }
        
        if(evolutionNamesPerPokemon.pokemonEvolutionTwo){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${evolutionNamesPerPokemon.pokemonEvolutionTwo}/`)
                .then(res => setPokemonEvolutionTwo(res.data)) 
                    .catch(err => console.log(err.response))
        }
       
    }, [evolutionNamesPerPokemon.pokemonBase, 
            evolutionNamesPerPokemon.pokemonEvolutionOne, 
                evolutionNamesPerPokemon.pokemonEvolutionTwo])

    return (
            
            <ul className='evolutions-container'>
                <div className='pokemon-base-container'>
                    {  
                       +id >= 899 && evolutionsChain.species?.name === 'calyrex'?
                            null
                        :
                        <>
                            <div className='name-evolution-pokemon-container'>
                                <li className='n-of-number-evolutions'>N°</li>
                                <li className='pokemon-evolution-id'>{pokemonBase.id}</li>
                                <li className='name-pokemon-evolution'>{evolutionNamesPerPokemon.pokemonBase}</li>
                            </div>
                            <img onClick={()=>  navigate(`/pokemon/${pokemonBase.id}`,
                                                setBioDefault(true))} className='evolutions-pokemon-png' 
                                                src={pokemonBase.sprites?.other.home.front_default? 
                                                        pokemonBase.sprites?.other.home.front_default 
                                                        : 
                                                        pokemonEvolutionTwo.sprites?.other['official-artwork'].front_default} 
                                                alt="pokemon"
                            />
                        </>
                    }
                </div>
                 <div className='pokemon-evolution-one-container'>
                    {
                        evolutionNamesPerPokemon.pokemonEvolutionOne?
                        <>  
                            <div className='name-evolution-pokemon-container'>
                                <li class='n-of-number-evolutions'>N°</li>
                                <li className='pokemon-evolution-id'>{pokemonEvolutionOne.id}</li>
                                <li className='name-pokemon-evolution'>{evolutionNamesPerPokemon.pokemonEvolutionOne}</li>
                            </div>
                            <img    onClick={()=> navigate(`/pokemon/${pokemonEvolutionOne.id}`,
                                    setBioDefault(true))} className='evolutions-pokemon-png' 
                                    src={pokemonEvolutionOne.sprites?.other.home.front_default} 
                                    alt="pokemon" 
                            />
                        </>
                        :
                        null
                    }
                </div> 
                <div className='pokemon-evolution-two-container'>
                    {
                        evolutionNamesPerPokemon.pokemonEvolutionTwo?
                        <>  
                            <div className='name-evolution-pokemon-container'>
                                <li class='n-of-number-evolutions'>N°</li>
                                <li className='pokemon-evolution-id'>{pokemonEvolutionTwo.id}</li>
                                <li className='name-pokemon-evolution'>{evolutionNamesPerPokemon.pokemonEvolutionTwo}</li>
                            </div>
                            <img onClick={()=>  navigate(`/pokemon/${pokemonEvolutionTwo.id}`,
                                                setBioDefault(true))} 
                                                className='evolutions-pokemon-png' 
                                                src={pokemonEvolutionTwo.sprites?.other.home/*['official-artwork']*/.front_default} 
                                                alt="pokemon" 
                            />   
                        </>
                        :
                        null
                    }
                </div>
            </ul>
    );
};

export default PokemonEvolutions;