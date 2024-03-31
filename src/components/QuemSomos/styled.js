import styled from "styled-components";

export const Container = styled.section`
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
 
    h1 {
        font-size: 36px;
        font-weight: 300;
        color:#9575CD;
        margin-top: 30px;
        position: relative;
        
    }

    h1::after {
        content: ""; 
        position: absolute; 
        left: 0; 
        top: 100%; 
        width: 100%; 
        border-bottom: 1px solid #ccc; 
    }
    p {
        margin-top: 30px;
        padding: 0 2%;
        width: 700px;
        color: #9575CD;
        text-align: center;
        font-size: 16px;

    }
    @media screen and (max-width: 768px) {
        p {
            width: 100%;
        }
    }
`;

export const Wrapper = styled.section`

width: 100%;
    flex-wrap: wrap;
    display: flex;
    margin-top: 40px;
    justify-content: space-around;

  

`;
export const Missao = styled.div `
        justify-content: flex-start;
        width: 50%;
        padding: 0 2%;
        flex-direction: row;
        margin: 20px;
    h2 {
    
        color: #9575CD;
        position: relative;
        margin-right: 20px;
    }
    h2::after {
        content: "";
        position: absolute; 
        width: 0;
        height: 0;
        border-top: 10px solid transparent; 
        border-bottom: 10px solid transparent; 
        border-left: 10px solid #9575CD; 
        left:-20px; 
        top: 50%; 
        transform: translateY(-50%); 
    }
    p {
        margin-top: 20px;
        color: #9575CD;
    }
    @media screen and (max-width: 768px){
     width: 100%;
     align-items:center;
     text-align:center;
     padding:10px;
     justify-content: center;
     border-bottom:1px solid #ccc;
    
     h2::after {
        display: none;
    }
    p{
        margin-bottom: 35px;
    }
   }
`;

export const Visao = styled.div`
justify-content: flex-end;
flex-direction: row;
margin-top: 150px;
width: 40%;
padding: 0 2%;
h2 {
        color: #9575CD;
        position: relative;
        
}
h2::after {
        content: "";
        position: absolute; 
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent; 
        border-left: 10px solid #9575CD; 
        left:-20px;
        top: 50%; 
        transform: translateY(-50%); 
    }
p {
    margin-top: 20px;
        color: #9575CD;
}
@media screen and (max-width: 768px){
     width: 100%;
     align-items:center;
     text-align:center;
     justify-content: center;
     padding:10px;
     margin:20px;
     padding:10px;
     border-bottom:1px solid #ccc;
    p {
        margin-bottom: 15px;
    }
     h2::after {
        display: none;
    }
   }
`;

export const Valores = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 60%;
    position: relative;
    left: -17%;
     
    padding: 0 2%;
    margin-top: 40px;
    
    ol {
        padding:10px;
        color: #9575CD;
        
       
    }
    li {
        margin: 10px;
    }
    p {
        display: inline-block;
        font-weight: bold;
        
    }
    h2 {
        color: #9575CD;
        position: relative;
        margin-right: 20px;
    }

    h2::after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid #9575CD;
        left: -20px;
        top: 50%;
        transform: translateY(-50%);
    }

    p {
        margin-top: 20px;
        color: #9575CD;
    }
    @media screen and (max-width: 768px){
     width: 100%;
     margin:20px;
     left:0;
     padding:10px;
     align-items:center;
     text-align:center;
     justify-content: center;
    
    p {
        margin-bottom: 35px;
    }
     ol {
        list-style: none;
     }
     h2::after {
        display: none;
    }
   }
`;