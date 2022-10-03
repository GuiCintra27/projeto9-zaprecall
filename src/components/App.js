import React, { useState } from 'react';
import GlobalStyle from './globalStyles';
import Body from './body';
import Footer from './footer';
import Header from './header';
import StartGame from './startGame';
import gameData from './decks';

export default function App() {
    const decks = gameData[0], deckType = gameData[1];
    const [answered, setAnswered] = useState(0);
    const [start, setStart] = useState(false);
    const [zaps, setZaps] = useState(0);
    const [deck, setDeck] = useState('');

    return (
        <>
            <GlobalStyle />
            {start ? (
                <>
                    <Header />
                    <Body deck={decks[deck]} answered={answered} setAnswered={setAnswered} zaps={zaps}/>
                    <Footer deck={decks[deck]} answered={answered}/>
                </>
            ) : (
                <StartGame setStart={setStart} zaps={zaps} setZaps={setZaps} deckType={deckType} deck={deck} setDeck={setDeck}/>
            )}
        </>
    );
}