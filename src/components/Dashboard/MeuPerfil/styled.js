import styled from "styled-components";
import iconVerify from '../../../assets/images/verified.png';
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
     list-style: none;
     margin:15px;
     padding: 10px;
    width:55%;
     .tipoCliente {
    font-size: 16px;
    margin: 2px;
    padding: 2px;
    font-weight: bold;
}
     
     h1 {
        color:#673AB7;
        font-weight:300;
     }
       p {
        color:#8C61D9;
        margin-top: 30px;
       }
@media screen and (max-width:768px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
    `;
export const Form = styled.form`
width: 100%;
display: flex;
margin:20px;
 
flex-direction: column; /* Alterado para organizar os itens em coluna */
padding: 10px;
flex-wrap: wrap;
input {
    width: 300px;
    height: 35px;
    color: #673AB7;
    border: none;
    padding: 10px;
    font-size: 19px;
    background-color:#D9D9D9;
}
label {
    
    width: 100px;
    display: flex;
    justify-content:center;
    align-items:center;
    height: 35px;
    color: white;
    background-color: #673AB7;
}
textarea {
  outline: none;
  width: 400px;  
  height: 100px; 
  padding: 10px;
  font-size: 19px;
  background-color:#D9D9D9;
  color: #673AB7;
  border: none;
  resize: vertical;
}

@media screen and (max-width: 768px) {
    width: 100%;
    display: flex;

    textarea {
    width:100%;
    margin-bottom: 15px;
}
 
 
}
`;
export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 40%;
    margin-bottom:10px;
    align-items: center;
    justify-content: flex-start;
    input {
        width: 300px;
        outline:none;
        height: 35px;
        color: #673AB7;
        border: none;
        padding: 10px;
        font-size: 19px;
        background-color: #D9D9D9;
    }
    label {
        width: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 35px;
        color: white;
        background-color: #673AB7;
    }
    @media screen and (max-width: 768px) {
            width: 100%;
            margin-bottom: 30px;
            input {
            width: 100%;
            }
  }
`;

export const BtnAlterar = styled.button`
  width: 300px;
  margin-top: 20px;
  height: 40px;
  background-color:transparent;
  cursor: pointer;
  border: 1px solid #9575CD;
  color: #9575CD;
  position: relative;
  border-radius:20px;
  font-size: 20px;
  &:hover {
    background-color: #9575CD;
    color: white;
  }
  @media screen and (max-width:768px) {
    width: 100%;
    max-width:400px;
    margin: 0 auto;
    margin-top: 20px; 
 }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
 
input {
    width: 300px;
    height: 35px;
    margin-right:22px;
    color: #673AB7;
    border: none;
    padding: 10px;
    font-size: 19px;
    outline:none;
    background-color:#D9D9D9;
}
@media screen and (max-width: 768px){
width:100%;
display: flex;
flex-wrap: wrap;
input {
    width:100%;
    margin-bottom: 15px;
    height: 60px;
}

}
`;
export const Perfil = styled.aside `
width:40%;
margin-top: 20px;
height: 30%;
background-color: #D9D9D9;
-webkit-box-shadow: 4px 7px 13px -3px rgba(122,120,122,1);
-moz-box-shadow: 4px 7px 13px -3px rgba(122,120,122,1);
box-shadow: 4px 7px 13px -3px rgba(122,120,122,1);
color:#673AB7;
display:flex;
flex-direction: column;
h1 {
    padding:3px;
    margin: 6px;
    font-size: 20px;
    font-weight: 300;
}
.elements {
    margin:10px;
    p {
        font-size: 18px;
        font-weight: 300;
        padding: 2px;
    }
}
 @media screen and (max-width:768px){
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    height: 240px;
    padding: 20px;
 }

`;
export const WrapperPerfil = styled.div`
display: flex;
flex-direction: row;

`;
export const BtnConfirmacao = styled.a`
 width: 300px;
 display: flex;
 text-decoration:none;
 height: 40px;
 background-color: #9575CD;
 border:none;
 color: white;
 cursor: pointer;
 border-radius: 40px;
 font-size: 18px;
 margin-top: 20px;
 align-items: center;
 justify-content:center;
 padding-left: 40px;  
 background-image: url(${iconVerify});  
 background-repeat: no-repeat;  
 background-position: 10px center;
 @media screen and (max-width:768px) {
    width: 100%;
    max-width:400px;
    margin: 0 auto;
    margin-top: 20px; 
 }
 
`;

 