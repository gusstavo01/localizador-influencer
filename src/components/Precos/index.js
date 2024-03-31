import React from "react";
import { Container,Card,  Wrapper,BtnComprar } from "./styled";

const Precos = () => {
    return(
        <div id="preco">
        <Container>
          <h1>Preços</h1>
          <Wrapper>
            <Card>
                <h4>Gratis</h4>
                <p>$<h2>0</h2><h5>/mês</h5></p>
                <ul>
                    <li>24h</li>
                </ul>
                <BtnComprar>Comprar</BtnComprar>
            </Card>
            <Card>
                <h4>Standart</h4>
                <p>$<h2>10</h2><h5>/mês</h5></p>
                <ul>
                    <li>30 dias</li>
                    <li>Suporte 24h</li>
                </ul>
                <BtnComprar>Comprar</BtnComprar>
            </Card>
            <Card>
                <h4>Pro</h4>
                <p>$<h2>20</h2><h5>/mês</h5></p>
                <ul>
                    <li>30 dias</li>
                    <li>Suporte 24h</li>
                    <li>Tools Analytics</li>
                </ul>
                <BtnComprar>Comprar</BtnComprar>
            </Card>
          </Wrapper>
          
        </Container>

        </div>
    )
}

export default Precos;