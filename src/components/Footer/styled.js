import styled from "styled-components";

export const FooterSection = styled.footer `
    background-color:#9575CD;
    width: 100%;
    height:auto;
    justify-content:space-around;
    flex-wrap:wrap;
    display: flex;
    @media screen and (max-width:768px) {
        height:auto ;
    }
`;

export const MenuFooter = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    
    h2 {
        margin: 10px;
        color: white;
        font-weight: 300;
    }
    ul {
        
        justify-content: space-around;
        list-style: none;
        margin: 10px;
        padding: 0;
        li {
            margin: 12px;
        }
    }
    a {
        color: white;
        text-decoration: none;
        font-size: 17px;
        font-weight: 300;
        &:hover {
                 color: #673AB7;
             }
    }
    @media screen and (max-width:768px) {
         width: 100%;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: center;
        align-items: center;
        
    h2 {
        margin-bottom: 20px;
         
    }
     nav {
                width: 100%;
                 
               
     }
     li {
        justify-content: center;
        align-items: center;
        text-align: center;
        
     }
    }

`;

export const Contato = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 10px;
    h2 {
         
        color: white;
        font-weight: 300;
    }
    p {
        color: white;
        font-size: 17px;
        font-weight: 300;
        margin: 10px;
    }
    @media screen and (max-width:768px) {
        width: 100%;
        flex-direction: row;
        flex-wrap:wrap;
        text-align: center;
        align-items: center;
        justify-content: center;
        p {
            width: 100%;
        }
        h2 {
        margin-bottom: 20px;
         
    }
     
    }
`;

export const SocialMedia = styled.div`
    display: flex;
    flex-direction:column;
    
    h2 {
        padding: 20px;
        margin: 10px;
        color: white;
        font-weight: 300;
    }


    img {
        width: 55px;
        height: 55px;
        margin: 15px;
        display: inline-block;
        cursor: pointer;   
    }  
    @media screen and (max-width:768px) {
        width: 100%;
        flex-direction: row;
        flex-wrap:wrap;
        align-items:center;
        justify-content: center;
        text-align: center;
        h2 {
            width: 100%;
        }
     img {
        width: 100%;
        width: 55px;
        height: 55px;
        
        flex-wrap:wrap;
        cursor: pointer;
     }
    }
`;
export const FooterEnd = styled.div`
width: 100%;
height: 40px;
background-color:#78629D;
display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 20px; 
h2{
    font-weight: 300;
    cursor: pointer; 
    padding:0;
    color: white;
   
     
}
p {
    color:white ;
  
    justify-content:center;
    font-size: 17px;
    font-weight: 300;
    margin: 0 auto;
}
a {
    text-decoration: none;
    color: #D7C5F8;
}

@media screen and (max-width:768px) {
    height: 40px;
}
`;