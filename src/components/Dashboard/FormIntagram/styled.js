import styled, {keyframes} from 'styled-components';

export const Container = styled.section`
    display: flex;
    width: 100%; 
    flex-wrap: wrap;
    flex-direction: column;
    @media screen and (max-width:768px){
        width: 100%;
        flex-wrap: wrap;
        flex-direction: row;
    }
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
@media screen and (max-width: 768px) {
    width:100%;
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
    justify-content:space-around;
    align-items:center;
     
}
    `;
export const Form = styled.form`
display: flex;
flex-direction: column;
margin:20px;
span {
color: #8C61D9;
}
h1 {
    margin-top:15px;
    font-weight: 300;
    color: #673AB7;
}
label {
    margin-top:15px;
    font-size: 18px;
    font-weight: 300;
    color: #673AB7;
    &::after{
        content: "";
        background-color: #673AB7;
        display: block;
        width: 100px;
        height: 1px;
        
    }
}
input {
    width: 400px;
    height: 30px;
    margin: 20px;
    color:#673AB7;
    font-size:20px;
    border: none;
    border-bottom: 1px solid #9575CD;  
    outline: none;
    &::placeholder {
        font-size: 19px;
    }
}
@media screen and (max-width: 768px) {
    flex-direction: row;
    width:100%;
    flex-wrap: wrap;
    padding: 10px; 

    h1, input, label {
      width: 100%; 
      margin-top: 10px; 
    }
    label {
        font-size:20px;
    }
    input {
        width: 100%;
        margin-top: 10px;
        margin-bottom: 20px;
        margin-left: 0;
        margin-right: 0; 
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
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width:400px;
    margin: 10px auto;
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