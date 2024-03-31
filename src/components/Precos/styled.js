import styled from "styled-components";

export const Container = styled.section`
    background-color: #9575CD;
    height: 500px;
    display: flex;
    flex-direction: column; 
    text-align: center;  
    margin: 0;
    
    
    h1 {
        color: white; 
        font-weight: 300;
        font-size: 36px;
        padding: 20px;
        margin: 10px auto;
    }
    @media screen and (max-width:768px) {
        height: 100%;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;  
    flex-wrap: wrap;
`;

export const Card = styled.div`
    width: 27%;
    height: 300px;
    background-color: white;
    color: #9575CD;
    border-radius: 50px;
    padding: 20px;
    display:flex;
    flex-direction: column; /* Adicione isso para que os itens dentro do card sejam exibidos em coluna */
    align-items: center; /* Adicione isso para alinhar os itens no centro */
    margin: 10px; 
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    h1 {
        justify-content: center;
        align-items: center;
    }
    p {
        
        margin-top: 10px; 
        display: flex;
        align-items: center; 
        justify-content: center;
    }

    h2 {
        margin: 0 5px; 
        font-size: 50px;
    }
    h4 {
        letter-spacing: 7px;
    }

    h5 {
        margin-left: 3px;
        font-size:18px;
    }
    ul {
        display: inline-block;
        margin: 20px;
        padding: 0 2%;
    }
    li {
        margin: 10px;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        max-width:500px;
        height: 400px;
        text-align:center;
        padding:20px;

        h1 {
        justify-content: center;
        align-items: center;
    }
    p {
        
        margin-top: 40px; 
        display: flex;
        align-items: space-around; 
        justify-content: space-around;
    }

    h2 {
        margin: 0 5px; 
        font-size: 50px;
    }
    h4 {
        letter-spacing: 0;
        font-size: 20px;
    }

    h5 {
        margin-left: 3px;
        font-size:18px;
    }
    ul {
        display: inline-block;
        margin: 5px;
        padding: 0 ;
    }
    li {
        margin: 0px;
    }
    }
`;

export const BtnComprar = styled.button`
width:130px;
height: 30px;
font-weight: 300;
font-size: 12px;
background-image: linear-gradient(60deg, #CD9DEA 10%, #54ADDE 80%);
border: none;
display: block;
justify-content: center;
align-items: center;
cursor: pointer;
border-radius: 40px;
color: white;
margin-top: auto;
box-shadow: rgba(50, 50, 93, 0.25) 0px 12px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
@media screen and (max-width: 768px) {
    height: 40px;
    width:200px;
    font-size: 18px;
     
}
`;
