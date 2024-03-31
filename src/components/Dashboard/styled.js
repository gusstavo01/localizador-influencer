import styled, {keyframes} from 'styled-components';

export const Container = styled.section`
    display: flex;
    width: 100%; 
    flex-wrap: wrap;
`;
export const Logo = styled.div`
 color:black;  
 color: white;
 padding: 10px;
 font-size: 26px;
 cursor: pointer;
`;
export const Menu = styled.nav`
width: 100%;
display: flex;
background-color:#9575CD;

align-items: center;
ul {
    display: flex;
    flex-direction:row;
    margin-left: auto; 
    margin-right: 20px;
    
}
li {
    list-style: none;
     margin:10px;
      
     
}
a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    font-weight: 300;
    &:hover {
        background-color: #673AB7;
        padding: 15px;
    }
}
`;
export const Welcome = styled.div`
display: flex;
flex-direction:column;
padding: 10px;
margin:10px;
h1 {
    color: #673AB7;
    font-weight:300;
    font-size: 27px;
   
}
span {
    font-weight:300;
    font-size: 24px;
}
 p {
    font-weight:300;
    color: #673AB7;
    font-size: 17px;
    margin: 10px;
}
p > span {
    font-weight:bold;
    font-size: 17px;
}
.tipoCliente {
    font-size: 16px;
    margin: 0;
    padding: 2px;
    font-weight: bold;
}
`;

export const Consulta = styled.section`
width: 100%;
margin:10px;
padding: 10px;
display: block;

h1 {
    font-weight: 300;
    font-size: 27px;
    color: #673AB7;
  &::after {
    content: "";
    display: block;
    width: 140px;
    height: 1px;
    background-color: #673AB7;
     
  }
}

`;
export const Form = styled.form`
margin:10px;
padding: 10px;
h4 {
    font-weight: 300;
    font-size: 27px;
    color: #673AB7;
     margin-bottom: 5px;
}
input {
    width: 400px;
    height: 40px;
    padding-left: 10px;
    border: none;
    color: black;
    font-size:20px;
    background-color: #ccc;
    border-radius: 4px;
    border-top-right-radius: 0; 
    border-bottom-right-radius: 0; 
    outline: none;
}
@media screen and (max-width:768px){
    width: 100%;
     
    input {
        width: 70%;
    }
}
`;
export const BtnProcurar = styled.button`
    width: 100px;
    height: 40px;
    background-color:#673AB7;
    border: none;
    color: white;
    position: relative;
     top:auto;
    border-radius: 4px;
    border-top-left-radius: 0; 
    border-bottom-left-radius: 0; 
    font-size: 20px;
    cursor: pointer;
    &:hover {
        background-color: #8C61D9;
    }
    @media screen and (max-width: 768px) {
        width: 20%;
    }
`;

export const Resultado = styled.div`
margin:10px;
padding:10px;
h1 {
  
    font-weight: 300;
    font-size: 27px;
    color: #673AB7;
  &::after {
    content: "";
    display: block;
    width: 140px;
    height: 1px;
    background-color: #673AB7;
     
  }
}
span {
    color: #673AB7;
    display: flex; /* Adicionando display flex */
    align-items: center; /* Alinhando os itens verticalmente */
    padding:10px;
    font-size: 17px;
    
}
a {
    display: block; 
    margin: 15px;
    color: #673AB7;
    text-decoration: none; 
    font-size: 17px;
    &:after{
        content: "";
        display: block;
        width:100%; /* Ajustando para 100% da largura disponível */
        height: 1px;
        background-color: #ccc;
        margin-right: 5px;
    }
}
img {
    background-color: #ccc;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-right: 5px;
}
@media screen and (max-width:768px) {
    width:100%;
    display: flex;
    flex-direction: column;
    a, span {
        width: auto; /* Ajustando para a largura automática */
        margin: 10px 0; /* Ajustando as margens para dispositivos móveis */
    }
    h1 {
        font-size: 20px; /* Ajustando o tamanho da fonte para dispositivos móveis */
        &::after {
            width: 100px; /* Ajustando a largura da linha */
        }
    }
}
`;


const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

export const PopUp = styled.div`
    width: 280px;
    height: 50px;
    color: white;
    display: flex;
    background-color: #00e676;
    border-radius:10px;
    position: absolute;
    top: 10%;
    right: 30px;
    justify-content: center;
    align-items: center;
    padding: 15px;
    animation: ${({ show }) => (show ? fadeIn : fadeOut)} 6s forwards;
`;