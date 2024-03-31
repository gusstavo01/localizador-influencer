import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {Container, Menu, Logo, Profile, Data} from './styled';
const Metricas = () => {
    const [dados, setDados] = useState({ perfil: '',seguidores: '', seguindo: '',  telefone: '' });
    const { nomePerfil } = useParams();
    useEffect(() => {
        const buscarDadosPerfil = async () => {
            try {
                const token = localStorage.getItem('token'); // Recupera o token JWT do localStorage
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };
        
                const response = await axios.get(`http://localhost:5010/api/perfil/${nomePerfil}`, config);
                const [perfilData] = response.data; // Define 'perfilData' aqui
                setDados({
                    perfil: perfilData.perfil, // Agora 'perfilData' está definida
                    seguidores: perfilData.seguidores, // Mantém como está ou atualize conforme necessário
                    seguindo: perfilData.seguindo, // Mantém como está ou atualize conforme necessário
                    contato: perfilData.telefone // Agora 'perfilData' está definida
                });
                console.log('Dados do perfil recebidos:', response.data);
            } catch (error) {
                console.error("Erro ao buscar dados do perfil:", error);
            }
        }
        
        buscarDadosPerfil();
    }, [nomePerfil]);
    const handleLogout = () => {
        localStorage.removeItem('token'); // Limpa o token JWT do localStorage
      
    };
    return (
        <Container>
            <Menu>
                <Logo>Logo</Logo>
                    <ul>
                    <li><a href="/dashboard">Inicio</a></li>
                        <li><a href="/meu-perfil">Meu perfil</a></li>
                        <li><a href="/login" onClick={handleLogout}>Sair</a></li>
                        </ul>
            </Menu>
            <Profile> 
                <img alt="img-insta"/> 
                <a href="insta">{dados.perfil}</a>
            </Profile>
            <Data>
                 <p>Seguindores: <span>{dados.seguidores}</span></p>
                 <p>Seguindo: <span>{dados.seguindo}</span></p>
                 <p>Contato: <span>{dados.contato}</span></p>
            </Data>
        </Container>
    );
}

export default Metricas;