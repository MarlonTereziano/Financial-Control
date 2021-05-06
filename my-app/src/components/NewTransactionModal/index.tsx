import React, { useState } from 'react';
import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox} from "./styles";
import closeImg from "../../assets/close.svg";
import inComeImg from "../../assets/income.svg";
import outComeImg from "../../assets/outcome.svg";




interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const [type, setType] = useState('deposit');

    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className = "react-modal-content"
        >
            <button type = "button" onClick={onRequestClose} className="react-modal-close"> 
                <img src={closeImg} alt="CloseIMG"/>
            </button>

            <Container>
                <h2>Cadastrat Transações</h2>

                <input placeholder= "Título"/>

                <input type="number" placeholder= "Valor"/>  

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick ={() => { setType('deposit'); }}
                        isActive = {type === 'deposit'}
                        activeColor = "green"
                    >
                        <img src={inComeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type="button"
                        onClick ={() => {setType('withdraw'); }}
                        isActive = {type === 'withdraw'}
                        activeColor = "red"
                    >
                        <img src={outComeImg} alt="Saída"/>
                        <span>Saída</span>
                    </RadioBox>

                </TransactionTypeContainer>
                

                <input placeholder= "Categoria"/> 
                

                <button type="submit"> Cadastrar </button>

            </Container>
        </Modal>
    );

    //className = {type === 'deposit' ? 'active' : ''}v

    
    

}