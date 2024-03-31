import React from "react";
import { Container,Item,BoxServicosClientesEmpresa,BoxServicosClientesIncluencers } from "./styled";
import imgConexao from '../../assets/images/conexao.png';
import imgAnalytics from '../../assets/images/analytics.png';
import imgRelacionamento from '../../assets/images/relacionamento.png';
const Servicos = () => {
    return(
        <div id="servicos">
        <Container>
            
                 <h1>Serviços</h1>
             
             <Item>
                
                <img src={imgConexao} alt="Conexão Influenciadores Locais"/> 
                <p>Conexão com Influenciadores Locais</p>
             </Item>
             <Item>
            
                <img src={imgAnalytics} alt="Analytics"/> 
                <p>Analise de perfil dos influênciadores</p>
             </Item>
             <Item>
                
                <img src={imgRelacionamento} alt="Relacionamento img"/> 
                <p>Gerenciamento de Relacionamento com Influenciadores</p>
             </Item>
             <BoxServicosClientesEmpresa>
                    <h1>Para empresas</h1>
                    <p>Você está procurando uma maneira eficaz de alcançar seu público-alvo local? Nossa plataforma permite que você encontre facilmente influenciadores que compartilham sua visão e valores, e que possuem uma forte presença nas redes sociais em sua área.</p>
             </BoxServicosClientesEmpresa>

             <BoxServicosClientesIncluencers>
                    <h1>Para Influenciadores</h1>
                    <p>Você é apaixonado por compartilhar seu conteúdo com seu público local? Junte-se à nossa comunidade de influenciadores e seja descoberto por empresas que buscam colaborações autênticas.</p>
             </BoxServicosClientesIncluencers>
        </Container>
        
        </div>
    )
};

export default Servicos;