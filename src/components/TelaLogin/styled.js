import styled from "styled-components";
import lockIcon from '../../assets/images/Password.png';
import EnvelopIcon from '../../assets/images/Envelope.png';
export const Welcome = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start; // Alinha os itens para o início, movendo o logo para o canto superior esquerdo
    background-color: #8C61D9;
    width: 50%; // Ajuste conforme necessário para a largura
    height: 100vh;
    padding: 20px;
    color: white;
    @media screen and (max-width: 768px) {
        width: 100%; 
        align-items: center; 
    }
`;
export const Chamada = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start; 
    margin-top: 70px; 
    padding-left: 20px; 
    h1 {
        font-size: 30px;
        
    }
    h1, p {
        
        margin: 0 0 20px; // Ajuste as margens conforme necessário para espaçamento
    }
    p {
        font-size: 40px;
    }
`;
export const BtnCriarConta = styled.a`
    width: 220px;
    border-radius: 40px;
    height: 40px;
    color: white;
    cursor: pointer;
    border: 1px solid white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    box-shadow: 0 10px 8px rgba(0, 0, 0, 0.3);
    margin-top: 60px;  
`;

export const ContainerForm = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;  
    justify-content: center;
    padding: 20px;
    width: 50%;  
    margin: auto;  
    height: 100vh;
    @media screen and (max-width: 768px) {
        width: 100%;
        align-items: center; 
        justify-content: center;
    }
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  
    input {
        margin:20px;
        height: 40px;
        min-width: 340px;
        background-color:#9575CD ;
        opacity:0.8;
        color: white;
        border: 1px solid transparent;
        border-radius:40px;
        outline: none;
        padding-left: 40px; 
        background-size: 24px; 
        background-position: 10px center; 
        background-repeat: no-repeat; 
        font-size: 17px;

        &::placeholder {
            color:#ccc;
            font-size: 17px;
        }
    }

    input[type="password"] {
        background-image: url(${lockIcon});
    }
    input[type="email"] {
        background-image: url(${EnvelopIcon});
    }
    @media screen and (max-width: 768px) {
            width: 80%; // Aumenta a largura em dispositivos menores para melhor usabilidade
        }
   
`;
export const ForgotPasswordLink = styled.a`
    text-decoration:none ;
    color:#9575CD ;
    
    font-weight: 300;
    font-size: 15px;
     // Adiciona este estilo para alinhar o link à esquerda
   
        @media screen and(max-width: 760px){
        align-self: center;
        display:flex;

        text-align: center;
        align-items: center; 
        justify-content: center;
    } 
   
`;

export const BtnEnviar = styled.button`
        height: 40px;
        margin-top: 40px;
        border: 2px solid #9575CD;
        border-radius:40px;
        color:#9575CD;
        cursor: pointer;
        font-size:20px;
        background-color: transparent;
        min-width: 340px;
        &:hover {
        background-color: #9575CD; 
        color: white; 
    }
    @media screen and (max-width:768px) {
        min-width: 200px;
        display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
`;
export const MainContainer = styled.div`
    display: flex;
    flex-direction: row; 
    width: 100%;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;
export const LogoWrapper = styled.div`
  a {
    text-decoration: none; // Remove o sublinhado
    color: white; // Ajuste a cor conforme necessário
    display: inline-block; // Garante o alinhamento correto
  }
`;

export const Logo = styled.h1`
  margin: 0;
  padding: 20px;
  font-weight: 300;
  cursor: pointer;
  align-self: flex-start; // Garante que o logo fique no início
`;


export const Title = styled.h1`
    color: #9575CD; 
    font-size: 40px; 
    margin: 0 0 20px 0; 
    align-self: center; 
    @media screen and(max-width: 760px){
        align-self: center;
         
        display: block;
        text-align: center;
        align-items: center; /* Alinha itens ao início (esquerda) */
        justify-content: center;
    }
`;