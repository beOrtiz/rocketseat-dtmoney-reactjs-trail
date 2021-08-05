import incomeImg from '../../assets/entradas.svg';
import outComeImg from '../../assets/saídas.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outComeImg} alt="Saídas" />
                </header>
                <strong>-R$500,00</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Totais" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    );
}