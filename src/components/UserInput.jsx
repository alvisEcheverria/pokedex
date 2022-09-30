import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUserName } from '../store/slices/currentUserName.slice';
import videoPokemon from '../assets/video/pokemon-in-the-wild.mp4'
import soundClick from '../assets/sounds-effects/sound-click.mp3'

const UserInput = () => {

    const dispatch = useDispatch()
        const [userName, setUserName] = useState('')
        
    const navigate = useNavigate()

    const changedName = () =>{

        dispatch(changeUserName(userName))
        navigate('/pokemon')

    }

    return (
        <div className='user-input'>
            <div className='overlay'></div>
            <video className='video-bg' src={videoPokemon} autoPlay loop muted/>
            <div className='content'>
                <img className='pokedex-logo' src="./img/pokedex-logo.png" alt="pokedex-logo" />
                <form onSubmit={changedName} className='form-content'>
                    <input 
                        type="text"
                        value={userName}
                        onChange={e=> setUserName(e.target.value)}
                        placeholder='Insert your trainer name'
                        className='user-name-input' 
                    />
                
                    <button className='btn-name-submit'>Start</button>
                </form>
                
                <audio src={soundClick} autoPlay/>
                
            </div>
        </div>
    );
};

export default UserInput;