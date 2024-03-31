import React,{useState} from "react";
import {Welcome, Chamada,BtnCriarConta,Title,ContainerForm,Logo,Wrapper,MainContainer, ForgotPasswordLink, BtnEnviar }from "./styled";
import axios from "axios";

const TelaLogin = () => {
    const [formData, setFormData] = useState({
        email:'',
        senha:''
    })
const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData({
     ...formData,
        [name]: value
    })
};
const handleSubmit = async (event) => { 
    event.preventDefault();
    try {
        const response = await axios.post('http://localhost:5010/api/login', formData);
        if(response.status === 200) {
            const token = response.data.token;
            console.log('Token JWT:', token);  
            localStorage.setItem('token', token);  
            window.location.href = response.data.redirectTo;
        }else {
            alert('Erro ao fazer login. Por favor, tente novamente.');
        }
        
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao fazer login. Por favor, tente novamente.');
    }
}
    return(
        <MainContainer>
        <Welcome>
            <Logo>Logo</Logo>
            <Chamada>
                <h1>Bem vindo</h1>
                <p>Acesse a sua conta<br/> agora mesmo.</p>
                <BtnCriarConta href="/cadastro">Criar Conta</BtnCriarConta>
            </Chamada>
            </Welcome>
            <ContainerForm>
                  
                  <Wrapper>
                  <Title>Login</Title>
                  <input type="email" placeholder="Email" name="email" onChange={handleInputChange} value={formData.email}/>
                  <input type="password" placeholder="Senha" name="senha" onChange={handleInputChange} value={formData.senha}/>
                  <ForgotPasswordLink href="#teste">Esquecia a senha</ForgotPasswordLink>
                    <BtnEnviar type="submit" onClick={handleSubmit}>Login</BtnEnviar>
                  </Wrapper>
                  
                 
             </ContainerForm>
       
       
        </MainContainer>
    )
}

export default TelaLogin;