import {Container} from "../../components/Dashboard/style";
import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionTable";

export function Dashboard(){
    return(

        <Container>
            <Summary/>
            <TransactionTable/>
        </Container>




    );
}