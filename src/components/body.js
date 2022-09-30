import FlashCard from "./flashcard";
import styled from "styled-components";
import { useState } from "react";

export default function Body({ deck, answered, setAnswered, zaps }) {
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [loseGame, setLoseGame] = useState(false)

    return (
        <Main>
            {deck.map((item, index) => (
                <FlashCard data-identifier="flashcard" key={index} quest={item.question} answer={item.answer} index={index} answered={answered} zaps={zaps} setAnswered={setAnswered} correctAnswers={correctAnswers} setCorrectAnswers={setCorrectAnswers} length={deck.length} loseGame={loseGame} setLoseGame={setLoseGame}/>
            ))}
        </Main>
    )
}

const Main = styled.div`
    max-height: 420px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`