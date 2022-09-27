import { useState } from "react";
import styled from "styled-components";
import playIcon from "../assets/img/play-outline-icon.svg";
import rotateIcon from "../assets/img/rotateIcon.svg";
import correctIcon from "../assets/img/checkmark-circle-icon.svg";
import helpIcon from "../assets/img/help-circle-icon.svg";
import incorrectIcon from "../assets/img/close-circle-icon.svg"



export default function FlashCard(props) {
  const cardQuestion = props.question;
  const cardAnswer = props.answer;
  const answered = props.answered;
  const setAnswered = props.setAnswered;

  const [answeredQuestion, setAnsweredQuestion] = useState(['--preto', '']);
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState(cardQuestion);
  const [isDisable, setIsDisable] = useState(false)
  const [icon, setIcon] = useState(playIcon);

  function Open() {
    setIsOpen(true);
  }

  function Answer() {
    if (question !== cardAnswer) {
      setQuestion(cardAnswer);
    } else {
      setQuestion(cardQuestion);
    }
  }

  function Answered(option, answer){
    setIsOpen(!isOpen);
    setAnsweredQuestion([option, 'line-through']);
    setQuestion(false);
    setIsDisable(true);
    setAnswered(answered + 1);

    if (answer === 'forgot'){
      setIcon(incorrectIcon);
    }else if(answer === 'effort'){
      setIcon(helpIcon);
    }else{
      setIcon(correctIcon);
    }
  }

  return (
    <Card color={answeredQuestion[0]} decoration={answeredQuestion[1]} className={isOpen ? 'open' : ''} onClick={isDisable ? undefined : (isOpen ? undefined : Open)}>
      <p>{isOpen ? question : `Pergunta ${props.index + 1}`}</p>
      {question === cardAnswer ? (
        <Action>
          <Button bgColor='--cor-nao-lembrei' onClick={() => Answered('--cor-nao-lembrei', 'forgot')}>Não lembrei</Button>
          <Button bgColor='--cor-quase-nao-lembrei' onClick={() => Answered('--cor-quase-nao-lembrei', 'effort')}>Quase não lembrei</Button>
          <Button bgColor='--cor-zap' onClick={() => Answered('--cor-zap', 'remembered')}>Zap!</Button>
        </Action>
      ) : (
        <Image color={answeredQuestion[0]} src={isOpen ? rotateIcon : icon} alt='icon' onClick={isOpen ? Answer : undefined} />
      )}
    </Card>
  )
}

const Card = styled.div`
  width: 300px;
  height: 65px;
  display: flex;
  border: none;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: var(${props => props.color});
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px 10px;
  text-decoration: ${props => props.decoration};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  position: relative;

  &:hover{
    cursor: pointer;
  }

  &.open{
    justify-content: unset;
    align-items: unset;
    min-height: 130px;
    display: flex;
    flex-direction: column;
    background-color: var(--cor-fundo-card);
    cursor: default;
    padding: 20px 10px;


    img {
      cursor: pointer;
      position: absolute;
      bottom: .5rem;
      right: .5rem;
    }
  }
`

const Image = styled.img`
  height: 23px;
  color: var(${props => props.color});
`

const Action = styled.div`
  position: absolute;
  bottom: .5rem;
  display: flex;
  width: 28rem;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`

const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: var(${props => props.bgColor});
  color: white;
  font-size: 12px;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover, &:focus{
      filter: brightness(0.7);
  }
`