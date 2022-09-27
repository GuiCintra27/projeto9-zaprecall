import styled from "styled-components"
import logo from '../assets/img/SmallLogo.svg';

export default function Header() {
    return (
        <ZapHeader>
            <img src={logo} alt="teste"/>
            <p>ZapRecall</p>
        </ZapHeader>
    )
}

const ZapHeader = styled.div`
    position: fixed;
    height: 80px;
    top: 0;
    left: 0;
    right: 0;
    margin-top: 4.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    font-size: 36px;
    color: white;
    font-family: "Righteous";
    z-index: 1;
    background-color: var(--cor-fundo);

    img{
        width: 52px;
        height: 60px;
    }
`