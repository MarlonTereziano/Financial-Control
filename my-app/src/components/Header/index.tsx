import logoImg from "../../assets/logo.svg" ;
import { Container, Content } from "./style";

type HeaderProps = {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps){


    return(
        <Container>
            <Content>
            <img src= {logoImg} alt="dt mone"/> 
            <strong>Big Finanças</strong>
            <button type="button" onClick={onOpenNewTransactionModal}> Nova Transação</button>

            </Content>
        </Container>
    )
}