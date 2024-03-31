import styled from "styled-components";
import bg from '../../assets/images/bg.jpg';



export const Container = styled.header`
  background-image: url(${bg});
  background-size: cover; // Faz com que a imagem de fundo cubra todo o cabeçalho
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  min-height:600px;
  padding-right: 40px;
  background-attachment: fixed;
 
`;

export const Logo = styled.div`
 color:white;   
 font-size: 26px;
 cursor: pointer;

`;
 export const Menu = styled.nav `
 width:100%;
 
 
.criarConta {
    a {
        color:#673AB7;
        font-weight: bold;
        font-size:15px;
    }
   
}
 ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: flex-end;
     li {
        margin-left: 20px; /* Adiciona espaçamento entre os itens */
         a {
             text-decoration: none;
             color: #fff;
             font-size: 14px;
             font-weight: 300;
             justify-content: flex-end;
             padding: 1rem;
             cursor: pointer;
             &:hover {
                 color: #673AB7;
             }
         }
     }
 }
 @media screen and (max-width: 1100px){
    display:none;
       
    
 }
 `;


 export const ButtonLogin = styled.button `
 background-image: linear-gradient(90deg, #D1C4E9 0%, #9575CD 100%);
  color: white;
  padding: 7px;
  border: none; /* Remover a borda do botão */
  border-radius: 30px;
  text-decoration: none;
  margin-top: -10px;
  cursor: pointer; /* Adicionar cursor de ponteiro */
  min-width: 120px; /* Defina uma largura mínima */
&:hover {
    background-image: linear-gradient(60deg, #9575CD 10%, #9575CD 80%);
    transition: 1ms linear;
}
    
 `;

export const Chamada = styled.div `
 
  display: flex;
 @media screen and (max-width: 1020px){
     
  flex-direction: column;
    
 }
`;
export const ChamadaTexto = styled.div `
h1{
    font-size: 50px;
}
p {
    font-size: 20px;
}
    text-align: left;
    color: #204F69;
    display: flex;
    flex-direction:column;
    position: absolute;  
    top: 40%;  
    left: 80px;  
    width: 400px;
    @media screen and (max-width: 1020px){
     top:100px; 
     left: 80px;
     flex-direction: column;
    
    }
    @media screen and (max-width: 768px){
     top:50%; 
     flex-direction: column;
    
    }
`; 
export const BtnChamada = styled.button `
 width:130px;
 height: 30px;
 font-weight: 300;
 font-size: 12px;
 background-image: linear-gradient(60deg, #CD9DEA 10%, #54ADDE 80%);
 border: none;
 cursor: pointer;
 border-radius: 40px;
 color: white;
 margin-top: 30px;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 12px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
export const ChamadaImg = styled.img`
 width:600px;
 display: flex;
  align-items: center; 
  position: absolute;
  top: 50%; 
  right: 80px; 
  transform: translateY(-50%); 
  @media screen and (max-width: 1020px){
    top: 75%;  
    left: 30px;
    width: 360px;
    }
    @media screen and (max-width: 1100px){
       display:none;
    }
`;
 export const MenuMobile = styled.nav `
  background-color: #FFFFFF;
  opacity: 0.9; 
  width: 100%; 
  max-width: 300px; 
  height: 100vh;
  right: 0; 
  top: 0; 
  
  display: flex;
  flex-direction: column; 
  z-index: 99;
  position: fixed; 
  transform: translateX(100%); 
  transition: transform 0.3s ease-in-out; 
  &.active {
    transform: translateX(0); // Move para a visão quando ativo
  }
  
  a {
    color: #673AB7;
    font-weight: bold;
    padding: 5px; // Adiciona mais espaço para um toque fácil
    cursor: pointer;
    text-decoration: none;
    display: block; // Garante que o link ocupe a linha inteira
   
  }
  ul {
    
    padding: 0; // Remove o padding padrão
  }
  li {

    padding: 5px;
    width: 100%;
    border-bottom: 1px solid #ccc;
    text-align: center;
    list-style: none;
    &:hover {
      background-color: #f1f1f1;
    }
    
  }
 `
 export const MenuIcon = styled.img`
 cursor: pointer;
 position: absolute;
 width: 70px;
 top: 20px;
 right: 20px;
 z-index: 101; // Garante que o ícone fique acima do menu
 @media (min-width: 1100px) {
    display: none;
  }
`;