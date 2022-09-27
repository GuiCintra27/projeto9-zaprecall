import FlashCard from "./flashcard";
import styled from "styled-components";

export default function Body(props) {
    const questions = props.deck.react;
    const answers = props.deck.reactAnswers
    const answered = props.answered;
    const setAnswered = props.setAnswered;

    return (
        <Main>
            {questions.map((item, index) => (<FlashCard key={index} question={item} answer={answers[index]} index={index} answered={answered} setAnswered={setAnswered}/>))}
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