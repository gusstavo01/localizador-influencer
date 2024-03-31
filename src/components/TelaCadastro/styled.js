import styled,{keyframes} from "styled-components";

export const Container = styled.section`

   width: 100%;
   display: flex;
   height:100vh;
   
   background-color:#8C61D9;
   position: relative;
   @media screen and (max-width: 768px) {
   height: auto;
}

`;

export const Content = styled.section`
   display: flex;
   background-color:white;
   width: 98%;
   margin:auto ;
   height: 98vh;
   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
   flex-direction: column;  

   padding: 2%; 
   @media screen and (max-width: 768px) {
    height:auto;
    width: 97%;
}
   `;
export const Chamada = styled.div`
    padding: 1%;
 h1 {
    font-weight: 300;
    font-size: 33px;
    color: #9575CD;
 }
 span {
    font-weight: 300;
    font-size: 27px;
    color:#6D529D;
 }
 @media screen and (max-width:768px) {
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
 }
`;
export const BtnGroup = styled.div`
    display: flex;
    flex-direction: row; 
    margin-top: 20px;  
`;
export const BtnChange = styled.button`
    background-color: rgba(149, 117, 205, 0.8);
   
    width: 200px;
    height: 30px;
    border-radius: 40px;
    border:none;   
    margin-right: 10px;  
    cursor: pointer;
    a {
        text-decoration: none;
        font-size: 20px;
        color: white;
        text-align:center;
    }
`;

export const Form = styled.form`
width: 100%;
display:flex;
 

input {
    width: 400px;
    height: 30px;
    margin: 13px;
    border: none;
    border-bottom: 1px solid #9575CD;  
    outline: none;
    &::placeholder {
        font-size: 19px;
    }
}
@media screen and (max-width: 768px) {
    width:100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    input {
        width: 100%;
        margin-bottom: 15px;
    }
}
`;
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
p {
    color:#9575CD;
    margin-left: 25px;
    
}
@media screen and (max-width: 768px) {
    width:100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

}
`;

export const BtnSend = styled.button`
 width: 420px;
 display: flex;
 height: 40px;
 background-color:transparent;
 border: 2px solid #9575CD;
 color: #9575CD;
 cursor: pointer;
 border-radius: 40px;
 font-size: 18px;
 align-items: center;
 justify-content:center;
 margin-top:10px;
&:hover {
        background-color: #9575CD; 
        color: white; 
    }
    @media screen and (max-width: 768px) {
        width:100%;
        max-width: 500px;
        flex-direction: row;
        flex-wrap: wrap;
        text-align:center;
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