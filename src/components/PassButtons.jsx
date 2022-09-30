import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PassButtons = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [pokemonPrev, setPokemonPrev] = useState({})
        const [pokemonNext, setPokemonNext] = useState({})

    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${+id-1}/`)
            .then(res => setPokemonPrev(res.data))

        axios.get(`https://pokeapi.co/api/v2/pokemon/${+id+1}/`)
        .then(res => setPokemonNext(res.data))

    }, [id])

    return (
        <div>
            <header className='header-container'>
                <div className='space-bar-btns'></div>
                <nav className='nav-pokemonDetails-container'>
                 
                    <div className='btn-left-container'>
                        <button 
                            onClick={()=> navigate(`/pokemon/${+id -1}`)}
                            disabled={+id <= 1}
                            className='pass-btn'
                        >   
                            <div className='btn-zl-pass-container'>
                                <p className='btn-left-right'>ZL</p>
                            </div>
                            <div className='btn-pass-info-container'>
                                <p className='n-of-number-pass-button'> N° 
                                    <span className='btn-info-id'> {+id == 1 ? +id : +id -1}</span>  
                                </p>
                                <p className='btn-name-pokemon'>{pokemonPrev.name}</p>
                            </div>
                        </button>
                    </div>
                  
                    <div className='pokeball-btn-container'>
                        <button className='pokeball-btn' onClick={()=> navigate('/pokemon')}></button>
                    </div>
                    <div className='btn-right-container'>
                        <button 
                            onClick={()=> navigate(`/pokemon/${+id +1}`)}
                            disabled={+id >= 905}
                            className='pass-btn'
                        >   
                            <div className='btn-pass-info-container'>
                                <p className='n-of-number-pass-button'> N° 
                                    <span className='btn-info-id'> {+id +1}</span>
                                </p>
                                <p className='btn-name-pokemon'>{pokemonNext.name}</p>
                           </div>
                           <div className='btn-zr-pass-container'>
                                <p className='btn-left-right'>ZR</p>
                           </div> 
                        </button>
                    </div>
                        
                    
                </nav>
            </header>
        </div>
    );
};

export default PassButtons;