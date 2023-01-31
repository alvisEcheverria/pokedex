import React from 'react';
import { useState } from 'react';
import '../styles/miniGame.css';
import pikachu from '../assets/sounds-effects/card-game/pikachu.wav';
import bulbasaur from '../assets/sounds-effects/card-game/bulbasaur.wav';
import squirtle from '../assets/sounds-effects/card-game/squirtle.wav';
import charizard from '../assets/sounds-effects/card-game/charizard.wav';
import butterfree from '../assets/sounds-effects/card-game/butterfree.wav';
import pidgeot from '../assets/sounds-effects/card-game/pidgeot.wav';
import primeape from '../assets/sounds-effects/card-game/primeape.wav';
import grimer from '../assets/sounds-effects/card-game/grimer.wav';
import ReactCardFlip from 'react-card-flip';

const MiniGameList = () => {

    let cards = [ 
                    {   
                        id: 1,
                        name: pikachu,
                        status: 'down',
                        img: './img/card_game/pikachu.png',
                        color: '#f9c74f'
                    },
                    { 
                        id: 2,
                        name: pikachu,
                        status: 'down',
                        img: './img/card_game/pikachu.png',
                        color: '#f9c74f',
                    },
                    {   
                        id: 3,
                        name: bulbasaur,
                        status: 'down',
                        img: './img/card_game/bulbasaur.png',
                        color: '#90be6d'
                    },
                    { 
                        id: 4,
                        name: bulbasaur,
                        status: 'down',
                        img: './img/card_game/bulbasaur.png',
                        color: '#90be6d'
                    },
                    {   
                        id: 5,
                        name: squirtle,
                        status: 'down',
                        img: './img/card_game/squirtle.png',
                        color: '#98c1d9'
                    },
                    { 
                        id: 6,
                        name: squirtle,
                        status: 'down',
                        img: './img/card_game/squirtle.png',
                        color: '#98c1d9'
                    },
                    {   
                        id: 7,
                        name: charizard,
                        status: 'down',
                        img: './img/card_game/charizard.png',
                        color: '#dc2f02'
                    },
                    { 
                        id: 8,
                        name: charizard,
                        status: 'down',
                        img: './img/card_game/charizard.png',
                        color: '#dc2f02'
                    },
                    {   
                        id: 9,
                        name: butterfree,
                        status: 'down',
                        img: './img/card_game/butterfree.png',
                        color: '#ffa69e'
                    },
                    { 
                        id: 10,
                        name: butterfree,
                        status: 'down',
                        img: './img/card_game/butterfree.png',
                        color: '#ffa69e'
                    },
                    {   
                        id: 11,
                        name: pidgeot,
                        status: 'down',
                        img: './img/card_game/pidgeot.png',
                        color: '#fefae0'
                    },
                    { 
                        id: 12,
                        name: pidgeot,
                        status: 'down',
                        img: './img/card_game/pidgeot.png',
                        color: '#fefae0'
                    },
                    {   
                        id: 13,
                        name: primeape,
                        status: 'down',
                        img: './img/card_game/primeape.png',
                        color: '#bc6c25'
                    },
                    { 
                        id: 14,
                        name: primeape,
                        status: 'down',
                        img: './img/card_game/primeape.png',
                        type: 'fighter',
                        color: '#bc6c25'
                    },
                    {   
                        id: 15,
                        name: grimer,
                        status: 'down',
                        img: './img/card_game/grimer.png',
                        color: '#6d6875'
                    },
                    { 
                        id: 16,
                        name: grimer,
                        status: 'down',
                        img: './img/card_game/grimer.png',
                        color: '#6d6875'
                    },
                ];

     const [ cardList, setCardList ] = useState(cards.sort(() => Math.random() - 0.5));
     const [prevIndexCard, setPrevIndexCard] = useState(-1);
     const [secondIndexCard, setSecondIndexCard] = useState(-1);
     const [ soundPokemon, setSoundPokemon ] = useState(null);

     const selectedCard = (index) =>{
            
        if(prevIndexCard === -1 && cardList[index].status !== 'up'){
            cardList[index].status = 'selected'
            setPrevIndexCard(index);
        }
        else if(secondIndexCard === -1 && prevIndexCard !== -1 && prevIndexCard !== index){
            cardList[index].status = 'selected'
            setSecondIndexCard(index);
            validateCards(index);
        }
     };

     const validateCards = (newIndexCard) => {
        setTimeout(()=>{
            const prev = cardList[prevIndexCard];
            const current = cardList[newIndexCard];
            if(prev.img === current.img && prev.id !== current.id){
                prev.status = 'up';
                current.status = 'up';
                setSoundPokemon(current.name)
            }else{
                prev.status = 'down';
                current.status = 'down';
            }
            setCardList([...cardList]);
            setPrevIndexCard(-1);
            setSecondIndexCard(-1);
        }, 1000);
     };

    return (
        <ul className='card-content'>
            <audio src={soundPokemon} autoPlay/>
        {
            cardList?.map((card, index) => (
                <li className='card' 
                    style={{background: `${card.color}`}}
                    key={card.id}
                    onClick={()=> selectedCard(index)}
                >
                    {
                        card.status !== 'down' ?
                            <img className={`card-img ${card.status}`}  src={card.img} alt="cards" />
                        :
                            <img className='pokeball-img' src='./img/card_game/pokeball.png' alt="pokeball" />
                    }
                </li>
            ))
        }
        </ul>
    );
};

export default MiniGameList;