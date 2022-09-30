import logo from "../assets/img/logo.svg";
import styled from "styled-components";

export default function StartGame({setStart, zaps, setZaps, deckType, deck, setDeck }) {
    function startGame() {
        if (zaps !== '' && zaps !== null && zaps > 0 && deck !== '') {
            setStart(true);
        }
    }

    return (
        <HomePage>
            <img src={logo} alt="Logo ZapRecall" />
            <h1>ZapRecall</h1>
            <select data-identifier="deck-selector" onChange={(e) => setDeck(e.target.value)}>
                <option data-identifier="deck-option"  selected disabled value=''>Selecione o seu deck</option>
                {deckType.map((item, index) => (
                    <option key={index} data-identifier="deck-option" value={index}>{item.option}</option>
                ))}
            </select>
            <input data-identifier="goals-input" type='Number' onChange={(e) => setZaps(Number(e.target.value))} placeholder="Digite sua meta de zaps..." />
            <button data-identifier="start-btn" className={zaps && deck !== '' ? undefined : 'disabled'} disabled={zaps && deck !== '' ? undefined : 'disabled'} onClick={startGame}>Iniciar Recall!</button>
        </HomePage>
    )
}

const HomePage = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--cor-fundo);

    img{
        width: 13.6rem;
        height: 16.1rem;
        margin-bottom: 1.3rem;
    }

    h1{
        font-family: "Righteous", cursive;
        font-size: 36px;
        color: white;
        margin-bottom: 3rem;
    }

    input, select{
        margin-bottom: 1.5rem;
        width: 246px;
        height: 43px;
        background: #FFFFFF;
        border-radius: 5px;
        border: none;
        padding: 1rem;
        color: #D70900;
    }

    button{
        width: 246px;
        height: 54px;
        padding: 16px 22px;
        border-radius: 5px;
        color: #D70900;
        font-size: 18px;
        background-color: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        font-family: 'Recursive';

        &:hover, &:focus{
            background-color: #cea2a0;
            cursor: pointer;
        }

        &.disabled{
            background-color: #E8E8E8 !important;
            color: #C0C0C0 !important;
            box-shadow: none;
            border: none;
        }
    }
`