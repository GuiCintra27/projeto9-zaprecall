import React, { useState } from 'react';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import Body from './body';
import Footer from './footer';
import Header from './header';
import StartGame from './startGame';

export default function App() {
    const deck = {
        react: [
            'O que é JSX ?',
            'O React é...',
            'Componentes devem iniciar com...',
            'Podemos colocar __ dentro do JSX',
            'O ReactDOM nos ajuda...',
            'Usamos o npm para...',
            'Usamos props para...',
            'Usamos estado(state) para...'
        ],
        reactAnswers: [
            'Uma extensão de linguagem do JavaScript',
            'uma biblioteca JavaScript para construção de interfaces',
            'letra maiúscula',
            'expressões',
            'interagindo com a DOM para colocar componentes React na mesma',
            'gerenciar os pacotes necessários e suas dependências',
            'passar diferentes informações para componentes',
            'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
        ]
    }

    const [answered, setAnswered] = useState(0);
    const [start, setStart] = useState(false);
    const [zaps, setZaps] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    return (
        <>
            <GlobalStyle />
            {start ? (
                <>
                    <Deck>
                        <Header />
                        <Body deck={deck} answered={answered} setAnswered={setAnswered} zaps={zaps} correctAnswers={correctAnswers} setCorrectAnswers={setCorrectAnswers}/>
                    </Deck>
                    <Footer deck={deck} answered={answered}/>
                </>
            ) : (
                <StartGame setStart={setStart} zaps={zaps} setZaps={setZaps}/>
            )}
        </>
    )
}

const Deck = styled.div`
    display: flex;
    flex-direction: column;
`