import FlashCard from "./flashcard";
import styled from "styled-components";

export default function Body({deck, answered, setAnswered, zaps,correctAnswers,setCorrectAnswers}) {
    return (
        <Main>
            {deck.map((item, index) => (<FlashCard key={index} quest={item.question} answer={item.answer} index={index} answered={answered} zaps={zaps} setAnswered={setAnswered} correctAnswers={correctAnswers} setCorrectAnswers={setCorrectAnswers}/>))}
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