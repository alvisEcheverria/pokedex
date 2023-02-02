import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PassButtons = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [pokemonPrev, setPokemonPrev] = useState({})
        const [pokemonNext, setPokemonNext] = useState({})

    useEffect(() => {

        if(+id >= 2  && +id <= 905 || +id >= 10002 && +id <= 10249){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${+id-1}/`)
                .then(res => setPokemonPrev(res.data))
                
        }
        
        if(+id >= 1  && +id <= 904 || +id >= 10001 && +id <= 10248){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${+id+1}/`)
                .then(res => setPokemonNext(res.data))
                .catch(error => console.log(error.response))
        }

    }, [id])

    const navigatePrevPage = () => {
        if(id === '1'){
            navigate(`/pokemon/10249`)
        }
        else if(id === '10001'){
            navigate(`/pokemon/905`)
        }
        else{
            navigate(`/pokemon/${pokemonPrev.id}`)
        }
    }

    const navigateNextPage = () =>{
        if(id === '905'){
            navigate(`/pokemon/10001`)
        }
        else if(id === '10249'){
            navigate(`/pokemon/1`)
        }
        else{
            navigate(`/pokemon/${pokemonNext.id}`) 
        }
    }

    return (
        <header className='header-container'>
            <div className='space-bar-btns'></div>
            <nav className='nav-pokemonDetails-container'>
                <div className='btn-left-container'>   
                    <button 
                        onClick={navigatePrevPage}
                        disabled={+id < 1 || +id > 905 && +id < 10001 || +id > 10249}
                        className='pass-btn'
                        style={ +id < 1 || +id > 905 && +id < 10001 || +id > 10249? 
                                {cursor: 'not-allowed'} 
                                :
                                null}
                    >   
                        <div className='btn-zl-pass-container'>
                            <p className='btn-left-right'>ZL</p>
                        </div>
                        <div className='btn-pass-info-container'>
                            <p className='n-of-number-pass-button'> 
                                N°
                                <span className='btn-info-id'>{id === '1'? '10249' : id === '10001'? '905' : pokemonPrev.id}</span>  
                            </p>
                            <p className='btn-name-pokemon'>{id === '1'? 'Enamorus-Therian' : id === '10001'? 'Enamorus-Incarnate' : pokemonPrev.name}</p>
                        </div>                           
                    </button>
                </div>
                
                <div className='pokeball-btn-container'>
                    <button className='pokeball-btn' onClick={()=> navigate('/pokemon')}></button>
                </div>
                <div className='btn-right-container'>
                    <button 
                        onClick={navigateNextPage}
                        className='pass-btn'
                        disabled={+id > 905 && +id < 10001 || +id > 10249}
                        style={
                            +id > 905 && +id < 10001 || +id > 10249?
                            {cursor: 'not-allowed'}
                            :
                            null
                        }
                    >   
                        <div className='btn-pass-info-container'>
                            <p className='n-of-number-pass-button'> 
                                N° 
                                <span className='btn-info-id'>{id === '905'? '10001' : id === '10249'? '1' : pokemonNext.id}</span>
                            </p>
                            <p className='btn-name-pokemon'>{id === '905'? 'Deoxys-Attack' : id === '10249'? 'Bulbasaur' : pokemonNext.name}</p>
                        </div>
                        <div className='btn-zr-pass-container'>
                            <p className='btn-left-right'>ZR</p>
                        </div> 
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default PassButtons;