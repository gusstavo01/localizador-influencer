import styled from "styled-components";
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
export const Profile = styled.div`
margin:20px;
display: flex;
align-items: center;
img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: #ccc;
}
a {
    text-decoration: none;
    color: #9575CD;
    font-size: 20px;
    margin-left: 30px;
}
`;

export const Data = styled.div`
    display:flex;
    width: 100%;
    flex-direction:column;
    padding: 10px;
    margin: 10px;

 p {
    margin:10px;
    color: #9575CD;
    font-weight: bold;
    font-size: 18px;
 }
 span {
    font-weight: 300;
    font-size: 16px;
 }
`;