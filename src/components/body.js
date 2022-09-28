import FlashCard from "./flashcard";
import styled from "styled-components";

export default function Body({deck, answered, setAnswered, zaps,correctAnswers,setCorrectAnswers}) {
    const questions = deck.react;
    const answers = deck.reactAnswers

    return (
        <Main>
            {questions.map((item, index) => (<FlashCard key={index} quest={item} answer={answers[index]} index={index} answered={answered} zaps={zaps} setAnswered={setAnswered} correctAnswers={correctAnswers} setCorrectAnswers={setCorrectAnswers}/>))}
        </Main>
    )
}

const Main = styled.div`
    max-height: 400px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;

    &&::-webkit-scrollbar {
        display: none;
    }
`