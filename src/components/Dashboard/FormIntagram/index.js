import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Menu, Logo, Container, Form, BtnAlterar, PopUp, Welcome } from './styled';

const DataIntagram = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [userData, setUserData] = useState(null); // Inicializando com null para aguardar a verificação de autenticação
    const [formData, setFormData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
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
        window.location.href = '/login';
    };
    const handleChange = (e) => {
        const { name, value } = e.target; // Destruturação para obter nome e valor do input
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value, // Usa o nome do input para definir o valor no estado
        }));
    };
    const handleClick = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Token JWT não encontrado');
                return;
            }

           let requestBody = {
            perfil: formData.perfil,
            seguidores: formData.seguidores,
            seguindo: formData.seguindo,
            cpf: userData.cpf
           
           }
          

            const response = await axios.put('http://localhost:5010/api/confirmar-instagram',requestBody,  {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 4000);
                console.log('Dados do usuário inseridos:', response.data);
                alert('Perfil atualizado com sucesso!');
            } else {
                console.error('Erro ao atualizar perfil:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao confirmar Instagram:', error);
            console.log('Erro completo:', error);
            alert('Erro ao confirmar Instagram. Por favor, tente novamente.');
        }
    };

    if (!userData) {
        return null; // Aguardando verificação de autenticação
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
                    <>
                        <h1>Bem vindo, {userData.tipo_id === 2 ? userData.razao_social : userData.nome_completo}</h1>
                        <p className="tipoCliente">
                            Cliente - {userData.tipo_id === 2 ? "Empresa" : "Influenciador"}
                        </p>
                        <p>Registre as informações do seu perfil</p>
                    </>
                ) : (
                    <p>Carregando...</p>
                )}
            </Welcome>
            <Form>
                <h1>Preencha os campos com os dados de sua conta</h1>
                <label>Seu perfil</label>
                <input type="text" name='perfil' placeholder="@meuperfil" value={formData.perfil}  onChange={handleChange}/>
                    <span>OBS.: Coloque o nome do seu perfil com o @</span>
                <label>Seguidores:</label>
                <input type="text" name='seguidores' placeholder="Seguidores" value={formData.seguidores} onChange={handleChange} />
                <label>Seguindo</label>
                <input type="text" name='seguindo' placeholder="Seguindo" value={formData.seguindo} onChange={handleChange} />
                <BtnAlterar type='submit' onClick={handleClick}>Enviar</BtnAlterar>
            </Form>
            {showPopup && <PopUp>Perfil inserido com sucesso!</PopUp>}
        </Container>
    );
};

export default DataIntagram;
