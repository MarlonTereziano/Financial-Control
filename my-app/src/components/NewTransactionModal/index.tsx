import {FormEvent, useState} from 'react';
import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox} from "./styles";
import closeImg from "../../assets/close.svg";
import inComeImg from "../../assets/income.svg";
import outComeImg from "../../assets/outcome.svg";
import { useTransactions } from '../../hooks/useTransactions';





interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const {createTransaction} = useTransactions();
    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');


    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type,
        })


        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        

        onRequestClose();

    }

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

            <Container onSubmit = {handleCreateNewTransaction}>
                <h2>Cadastrar Transações</h2>

                <input placeholder= "Título"
                 value={title}
                 onChange={event => setTitle(event.target.value)}
                
                />

                <input type="number" placeholder= "Valor"
                 value={amount}
                 onChange={event => setAmount(Number(event.target.value))}
                />  

                {/* poderia ser um + no lugar do number */} 

                <TransactionTypeContainer>
                    <RadioBox
                     type="button"
                        
                     onClick ={() => { setType('deposit'); }}
                     isActive = {type === 'deposit'}
                     activeColor = 'green'
                    >
                        
                        <img src={inComeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                     type="button"
                     onClick ={() => {setType('withdraw'); }}
                     isActive = {type === 'withdraw'}
                     activeColor = 'red'
                    >
                        <img src={outComeImg} alt="Saída"/>
                        <span>Saída</span>
                    </RadioBox>

                </TransactionTypeContainer>
                

                <input placeholder= "Categoria"
                 value={category}
                 onChange={event => setCategory(event.target.value)}
                
                /> 
                

                <button type="submit"> Cadastrar </button>

            </Container>
        </Modal>
    );

    //className = {type === 'deposit' ? 'active' : ''}v

    
    

}