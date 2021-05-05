import {Container} from "../../components/TransactionTable/styles"


export function TransactionTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento web</td>
                        <td className = "deposit">121000</td>
                        <td>Desenvolvimento</td>
                        <td>20/12/34</td>  
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className = "withDraw">-50</td>
                        <td>Desenvolvimento</td>
                        <td>20/12/34</td>
                    </tr>

                </tbody>
                
            </table>
        </Container>



    );
}