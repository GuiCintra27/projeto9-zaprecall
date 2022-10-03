import styled from "styled-components";

export default function Footer({deck, answered}){
    const questions = deck.length;

    return (
        <AnswerArea>
            <p>{answered}/{questions} CONCLUÍDOS</p>
        </AnswerArea>
    );
}

const AnswerArea = styled.div `
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: white;
    z-index: 1;
    width: 100%;
    min-height: 70px;
    padding: 14px 10px;
    font-size: 18px;
    color: black;
    position: fixed;
    text-align: center;
    gap: 20px;
`;