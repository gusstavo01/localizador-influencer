import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Logo, Menu, Welcome,PopUp, Consulta, Form, BtnProcurar, Resultado } from './styled';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [userData, setUserData] = useState(null);
    // Estado para armazenar dados da consulta
    const [consultaDados, setConsultaDados] = useState(null);
    const [cep, setCep] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    window.location.href = '/login';
                    console.error('Token não encontrado no armazenamento local.');
                    return;
                }

                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                const response = await axios.get('http://localhost:5010/api/getUserInfo', config);
                console.log('Dados do usuário recebidos:', response.data);
                setUserData(response.data);
            } catch (error) {
                console.error('Erro ao obter dados do usuário:', error);
            }
        };

        fetchData();
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('token'); // Limpa o token JWT do localStorage
      
    };
    const handleConsulta = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                window.location.href = '/login';
                console.error('Token não encontrado no armazenamento local.');
                return;
            }
            if (!cep) {
               alert('CEP não fornecido.');
                return;
            }
    
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    cep: cep // Enviando cep como parâmetro de consulta
                }
            };
          
            const response = await axios.get(`http://localhost:5010/api/consulta-cep`,  config);
        
            if (response.status === 200) {
                setConsultaDados(response.data);
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 4000);
               
                
                console.log('Resultado da consulta:', response.data);
            }else {
                console.error('Erro ao tentar realizar a consulta:', response.statusText);
                setConsultaDados(null);
            }
           
          
        } catch (error) {
            console.error('Erro na consulta do CEP:', error);
             // Em caso de erro, esconde os resultados
        }
    }

    return (
        <Container>
            <Menu>
                <Logo>Logo</Logo>
                <ul>
                    <li><a href="dashboard">Inicio</a></li>
                    <li><a href="meu-perfil">Meu perfil</a></li>
                    <li><a href="/login" onClick={handleLogout}>Sair</a></li>
                </ul>
            </Menu>
            <Welcome>
    {userData ? (
        <div>
            {userData.tipo_id === 2 ? (
                <h1>Bem vindo, {userData.razao_social}</h1>
            ) : (
                <h1>Bem vindo, {userData.nome_completo}</h1>
            )}
            <p className='tipoCliente'>Cliente - {userData.tipo_id === 2 ? 'Empresa' : 'Influenciador'}</p>
        </div>
    ) : (
        <p>Carregando...</p>
    )}
    <p>Prencha o campo abaixo com o cep.</p>
    <p>Nossa ferramenta faz a busca pelo cep do bairro.</p>
    <p>Edite suas informações em <span>meu perfil</span>.</p>
</Welcome>

            <Consulta>
                <h1>Consulta</h1>
                <Form >
                    <h4>Cep:</h4>
                    <input type="text" placeholder="Cep" value={cep} onChange={(e) => setCep(e.target.value)} />
                    <BtnProcurar type='submit' onClick={handleConsulta}>Procurar</BtnProcurar>
                </Form>
            </Consulta>
            {consultaDados && consultaDados.length > 0 && (
    <Resultado>
        <h1>Resultado</h1>
        {consultaDados.map((influenciador, index) => (
            <div key={index}>
             <Link to={`/metricas/${encodeURIComponent(influenciador.perfil)}`}>

                    <span>
                        {/* Supondo que você tenha uma URL para a imagem do influenciador */}
                        <img  alt="img-influenciador" />
                        <span> {influenciador.perfil} </span> | 
                        <span> Seguidores: {influenciador.seguidores} </span> | 
                        <span> Seguindo: {influenciador.seguindo}</span>
                    </span>
                </Link>
            </div>
        ))}
    </Resultado>
)}

     {showPopup && <PopUp>Busca realizada com sucesso</PopUp>}
        </Container>
    );
};

export default Dashboard;
