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
    console.log(pokemonBase)
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

    const pokemonPerType = [
        {
            type: 'grass',
            color: 'linear-gradient(290deg, rgba(255,255,255,0) 10%, rgba(64, 145, 108,1) 35%, rgba(82, 183, 136,1) 35%, rgba(82, 183, 136,1) 60%, rgba(116, 198, 157,1) 60%, rgba(255,255,255,0) 90%)'
        },
        {
            type: 'fire',
            color: 'linear-gradient(290deg, rgba(255,255,255,0) 10%, rgba(228,74,30,1) 35%, rgba(231,92,53,1) 35%, rgba(231,92,53,1) 60%, rgba(233,111,76,1) 60%, rgba(255,255,255,0) 90%)'
        },
        {
            type: 'water',
            color: 'linear-gradient(290deg, rgba(255,255,255,0) 10%, rgba(4,108,241,1) 35%, rgba(19,121,251,1) 35%, rgba(19,121,251,1) 60%, rgba(44,135,252,1) 60%, rgba(255,255,255,0) 90%)'
        },
        {
            type: 'bug',
            color: 'linear-gradient(290deg, rgba(255,255,255,0) 10%, rgba(67,164,65,1) 35%, rgba(74,182,72,1) 35%, rgba(74,182,72,1) 60%, rgba(92,190,90,1) 60%, rgba(255,255,255,0) 90%)'
        },
        {
            type: 'normal',
            color: 'linear-gradient(290deg, rgba(255,255,255,0) 10%, rgba(100,71,77,1) 35%, rgba(115,82,88,1) 35%, rgba(115,82,88,1) 60%, rgba(130,92,100,1) 60%, rgba(255,255,255,0) 90%)'
        },
        {
            type: 'poison',
            color: 'linear-gradient(290deg, rgba(255,255,255,0) 10%, rgba(78,42,113,1) 35%, rgba(91,49,132,1) 35%, rgba(91,49,132,1) 60%, rgba(104,56,150,1) 60%, rgba(255,255,255,0) 90%)'
        },
        {
            type: 'electric',
            color: 'linear-gradient(290deg, rgba(255,255,255,0) 10%, rgba(249,161,0,1) 35%, rgba(255,172,20,1) 35%, rgba(255,172,20,1) 60%, rgba(255,181,45,1) 60%, rgba(255,255,255,0) 90%)'
        },
        {
            type: 'fairy',
            color: 'linear-gradient(290deg, rgba(255,255,255,0) 10%, rgba(129,23,59,1) 35%, rgba(151,27,69,1) 35%, rgba(151,27,69,1) 60%, rgba(172,31,79,1) 60%, rgba(255,255,255,0) 90%)'
        },
        {
            type: 'ground',
            color: 'linear-gradient(290deg, rgba(255,255,255,0) 10%, rgba(77,49,6,1) 35%, rgba(101,64,8,1) 35%, rgba(101,64,8,1) 60%, rgba(124,79,10,1) 60%, rgba(255,255,255,0) 90%)'
        },
        {
            type: 'fighting',
            color: 'linear-gradient(290deg, rgba(255,255,255,0) 10%, rgba(130,56,36,1) 35%, rgba(150,65,42,1) 35%, rgba(150,65,42,1) 60%, rgba(170,73,47,1) 60%, rgba(255,255,255,0) 90%)'
        },
        {
            type: 'psychic',
            color: 'linear-gradient(290deg, rgba(255,255,255,0) 10%, rgba(203,189,173,1) 35%, rgba(213,202,189,1) 35%, rgba(213,202,189,1) 60%, rgba(223,214,204,1) 60%, rgba(255,255,255,0) 90%)'
        },
        {
            type: 'rock',
            color: 'linear-gradient(290deg, rgba(255,255,255,0) 10%, rgba(113,113,113,1) 35%, rgba(126,126,126,1) 35%, rgba(126,126,126,1) 60%, rgba(139,139,139,1) 60%, rgba(255,255,255,0) 90%)'
        },
        {
            type: 'ghost',
            color: 'linear-gradient(290deg, rgba(255,255,255,0) 10%, rgba(42,44,88,1) 35%, rgba(50,53,105,1) 35%, rgba(50,53,105,1) 60%, rgba(58,61,123,1) 60%, rgba(255,255,255,0) 90%)'
        },
        {
            type: 'ice',
            color: 'linear-gradient(290deg, rgba(255,255,255,0) 10%, rgba(90,181,218,1) 35%, rgba(111,190,223,1) 35%, rgba(111,190,223,1) 60%, rgba(132,200,227,1) 60%, rgba(255,255,255,0) 90%)'
        },
        {
            type: 'dragon',
            color: 'linear-gradient(290deg, rgba(255,255,255,0) 10%, rgba(130,0,0,1) 35%, rgba(156,0,0,1) 35%, rgba(156,0,0,1) 60%, rgba(181,0,0,1) 60%, rgba(255,255,255,0) 90%)'
        },
        {
            type: 'dark',
            color: 'linear-gradient(290deg, rgba(255,255,255,0) 10%, rgba(0,0,0,1) 35%, rgba(3,7,6,1) 35%, rgba(3,7,6,1) 60%, rgba(11,25,21,1) 60%, rgba(255,255,255,0) 90%)'
        },
        {
            type: 'steel',
            color: 'linear-gradient(290deg, rgba(255,255,255,0) 10%, rgba(66,66,66,1) 35%, rgba(79,79,79,1) 35%, rgba(79,79,79,1) 60%, rgba(92,92,92,1) 60%, rgba(255,255,255,0) 90%)'
        }
    ]

    const findType = (name)=>{
        if(name !== null){
            const typePokemon = pokemonPerType.find(type => type?.type === name);               
            return typePokemon;
        }
    }

    const typeFilter = findType(pokemonBase.types?.[0].type.name);

    return (      
            <ul className='evolutions-container' style={typeFilter?.type === pokemonBase.types?.[0].type.name? {background: `${typeFilter?.color}`} : {background: 'whitesmoke'}}>
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