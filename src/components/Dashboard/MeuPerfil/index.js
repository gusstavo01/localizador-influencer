import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Menu, Logo, Welcome, Form, InputContainer, BtnAlterar, Wrapper,Perfil,WrapperPerfil,BtnConfirmacao} from './styled';
import { formatTelefone } from "../../TelaCadastro/formatadores";
import { useNavigate } from "react-router-dom";

const MeuPerfil = () => {
    const [contato, setContato] = useState('');
    const [experiencia, setExperiencia] = useState('');
    const [userData, setUserData] = useState(null);
    const [getEndereco, setgetEndereco] = useState({
        cep: '',
        estado: '',
        cidade: '',
        bairro: ''
    });
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/login')
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
                setContato(response.data.telefone);
                setExperiencia(response.data.experiencia || '');
                setgetEndereco(prevEndereco => ({
                    ...prevEndereco,
                    cep: response.data.cep,
                    estado: response.data.estado,
                    cidade: response.data.cidade,
                    bairro: response.data.bairro
                }));
                 
            } catch (error) {
                console.error('Erro ao obter dados do usuário:', error);
            }
        };

        fetchData();
    }, [formData, navigate]);
    

    const handleAlterarPerfil = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token JWT não encontrado');
            }
            

            let requestBody = {
                telefone: contato,
                experiencia: experiencia,
                cep: formData.cep,
                estado: formData.estado,
                cidade: formData.cidade,
                bairro: formData.bairro,
            };
            
    
            // Verifica se o usuário é uma empresa
            if (userData.tipo_id === 2) {
                // Se for uma empresa, adiciona o CNPJ ao corpo da requisição
                requestBody.cnpj = userData.cnpj;
            } else {
                // Caso contrário, adiciona o CPF ao corpo da requisição
                requestBody.cpf = userData.cpf;
            }
    
            const response = await axios.put("http://localhost:5010/api/meu-perfil", requestBody, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                alert('Perfil atualizado com sucesso!');
            } else {
                console.error('Erro ao atualizar perfil:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao atualizar perfil:', error);
        }
    }

    const handleTelefoneChange = (event) => {
        const number = event.target.value;
        const digits = number.replace(/\D/g, '');
        const formattedValue = formatTelefone(digits);
        setContato(formattedValue);
    };
    const handleCepChange = async (event) => {
        const cep = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos do CEP
    
        console.log(`CEP Value: ${cep}`);
    
        if (cep.length === 8) { // Verifica se o CEP tem o tamanho correto
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                const data = response.data;
                if (!data.erro) {
                    setFormData(prevFormData => ({
                        ...prevFormData,
                        cep: cep,
                        cidade: data.localidade,
                        estado: data.uf,
                        bairro: data.bairro
                    }));
                } else {
                    alert('CEP inválido. Por favor, insira um CEP válido.');
                }
            } catch (error) {
                console.log(error);
            }
        }
    };
    const handleLogout = () => {
        localStorage.removeItem('token'); // Limpa o token JWT do localStorage
        window.location.href = '/login'
    };
    

    
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
                        <p>É necessário manter os seus dados atualizados para que parceiros consigam entrar em contato.</p>
                        <p>No campo experiências, podera colocar uma intrudução do seu tipo de trabalho.</p>
                    </>
                ) : (
                    <p>Carregando...</p>
                )}
            
            </Welcome>
            <Perfil>
                        <div><h1>Informações</h1></div>
                        <div className="elements">
                        <p>Nome: {userData && (userData.tipo_id === 2 ? userData.razao_social : userData.nome_completo)}</p>
                            <p>Contato: {userData && userData.telefone}</p>
                            <WrapperPerfil>
                            <p>Cep: {getEndereco.cep}</p>
                            <p>| Estado: {getEndereco.estado}</p>
                            </WrapperPerfil>
                            <WrapperPerfil>
                            <p>Cidade: {getEndereco.cidade}</p>
                            <p>| Bairro: {getEndereco.bairro}</p>
                        </WrapperPerfil>
                        </div>
                         
                </Perfil>
            <Form>
                <InputContainer >
                    <label>Contato</label>
                    <input type="text"  value={contato} onChange={handleTelefoneChange} />
                    
                </InputContainer>
                  
                <label>Experiências</label>
                <textarea value={experiencia} onChange={(e) => setExperiencia(e.target.value)}></textarea>
               
                    <Wrapper>
                        <label>Cep</label>
                        <input type="text" placeholder="Cep" value={formData.cep} onChange={handleCepChange}/>
                        <label>Estado</label>
                        <input type="text" placeholder="Estado" value={formData.estado} readOnly/>
                    </Wrapper>
                    <Wrapper> 
                       
                        <label>Cidade</label>
                        <input type="text" placeholder="Cidade" value={formData.cidade} readOnly/>
                        <label>Bairro</label>
                        <input type="text" placeholder="Bairro" value={formData.bairro} readOnly/>
                        </Wrapper>
                
                  
                
                <BtnAlterar type='submit' onClick={handleAlterarPerfil} placeholder='Suas experiências'>Alterar</BtnAlterar>
                <BtnConfirmacao  href='/authInstagram' >Confirmar Instagram</BtnConfirmacao>
            </Form>
         
           
        </Container>
    )
}

export default MeuPerfil;
