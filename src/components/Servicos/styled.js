import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
  
   
   
     

    h1 {
        color:#9575CD;
       
        width: 100%;
        font-size:36px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top: 30px;

    }
     @media screen and (max-width: 768px){
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        margin-top: 50px;
        justify-content:space-around;
        align-items: center;
        
    }
`;

export const Item = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    justify-content:space-around;
    align-items: center; 

    img {
        height: 100px;
        width: 100px;
       
    }
    p {
        color:#9575CD;
        margin-top: 30px;
        font-size: 19px;
        text-align: center;
    }
    @media screen and (max-width: 768px){
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        margin-top: 70px;
        justify-content:space-around;
        align-items: center;
        img {
            width: 100%;
            max-width: 100px;
        }
        p{
            width: 100%;
        }
    }
`;
export const BoxServicosClientesEmpresa = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 40%;
    padding: 40px;
    margin-right: auto;
    h1 {
         
        justify-content: flex-start;

        
    }
    p {
        color:#9575CD;
        margin-top: 25px;
        font-size: 19px;
        
    }
    @media screen and (max-width: 1020px){
        flex-direction: row;
    justify-content: center;
    align-items: center;
     width: 100%;
     flex-wrap:wrap;

   
    }
`;

export const BoxServicosClientesIncluencers = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    text-align: right;
    width: 40%;
    padding: 40px;    
    h1 {
         
        justify-content: flex-end;
        
    }
    p {
        color:#9575CD;
        margin-top: 25px;
        font-size: 19px;
        
    }
    @media screen and (max-width: 1020px){
        flex-direction: row;
    justify-content: center;
    align-items: center;
     width: 100%;
     flex-wrap:wrap;

   
    }
    `;