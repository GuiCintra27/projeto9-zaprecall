import React, { useState } from 'react';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import Body from './body';
import Footer from './footer';
import Header from './header';
import StartGame from './startGame';
import decks from './decks';

export default function App() {
    const deckType = [
        { option: 'React'},
        { option: 'Percy Jackson'},
        { option: 'Mitologia Grega'},
        { option: 'Pokémon'}
    ];
    
    const [answered, setAnswered] = useState(0);
    const [start, setStart] = useState(false);
    const [zaps, setZaps] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [deck, setDeck] = useState('');

    return (
        <>
            <GlobalStyle />
            {start ? (
                <>
                    <Deck>
                        <Header />
                        <Body deck={decks[deck]} answered={answered} setAnswered={setAnswered} zaps={zaps} correctAnswers={correctAnswers} setCorrectAnswers={setCorrectAnswers}/>
                    </Deck>
                    <Footer deck={deck} answered={answered}/>
                </>
            ) : (
                <StartGame setStart={setStart} zaps={zaps} setZaps={setZaps} deck={deck} deckType={deckType} setDeck={setDeck}/>
            )}
        </>
    )
}

const Deck = styled.div`
    display: flex;
    flex-direction: column;
`