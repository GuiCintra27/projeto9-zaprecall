import { useState } from "react";
import styled from "styled-components";
import rotateIcon from "../assets/img/rotateIcon.svg";
const playIcon = 'play-outline', correctIcon = 'checkmark-circle', helpIcon = 'help-circle', incorrectIcon = 'close-circle';

export default function FlashCard({quest, answer, answered, setAnswered, index, zaps, correctAnswers, setCorrectAnswers, length, loseGame, setLoseGame}) {
  const [cardStyle, setCardStyle] = useState(['--preto', '']);
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState(quest);
  const [isDisable, setIsDisable] = useState(false)
  const [icon, setIcon] = useState(playIcon);

  function Open() {
    setIsOpen(true);
  }

  function Answered(option, answer){
    setIsOpen(!isOpen);
    setCardStyle([option, 'line-through']);
    setQuestion(false);
    setIsDisable(true);
    setAnswered(answered + 1);
    let correct = correctAnswers;

    if (answer === 'forgot'){
      setIcon(incorrectIcon);
    }else if(answer === 'effort'){
      setIcon(helpIcon);
    }else{
      if(zaps === correctAnswers + 1){
        alert('Parabens, você atingiu sua meta de zaps!');
      }
      correct ++
      setCorrectAnswers(correctAnswers + 1);
      setIcon(correctIcon);
    }

    if(length - ((answered + 1) - correct) === zaps - 1 && loseGame === false){
      alert('Infelizmente você não conseguiu o número desejado de zaps!');
      setLoseGame(true);
    }
  }

  return (
    <Card color={cardStyle[0]} decoration={cardStyle[1]} className={isOpen ? 'open' : ''} onClick={isDisable ? undefined : (isOpen ? undefined : Open)}>
      <p>{isOpen ? question : `Pergunta ${index + 1}`}</p>
      {question === answer ? (
        <Action>
          <Button bgColor='--cor-nao-lembrei' onClick={() => Answered('--cor-nao-lembrei', 'forgot')}>Não lembrei</Button>
          <Button bgColor='--cor-quase-nao-lembrei' onClick={() => Answered('--cor-quase-nao-lembrei', 'effort')}>Quase não lembrei</Button>
          <Button bgColor='--cor-zap' onClick={() => Answered('--cor-zap', 'remembered')}>Zap!</Button>
        </Action>
      ) : (
        
        isOpen ? 
        <img src={rotateIcon} alt='icon' onClick={() => setQuestion(answer)} /> 
        :
        <ion-icon name={icon}></ion-icon>
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

  ion-icon, img{
    height: 23px;
    font-size: 23px;
    color: var(${props => props.color});
  }
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