import {Container} from "../../components/Summary/style"
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import TotalImg from "../../assets/total.svg";

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>
                <strong> R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src= {outcomeImg} alt="Saidas"/>
                </header>
                <strong> - R$100,00</strong>
            </div>
            <div className = "bunitu">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total"/>
                </header>
                <strong> R$1000,00</strong>
            </div>
        </Container>
    );
}