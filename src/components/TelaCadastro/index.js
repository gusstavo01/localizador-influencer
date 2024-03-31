import React, {useState} from 'react'
import axios from 'axios';
import { Container, Content, Chamada,BtnGroup, BtnChange,Form, Wrapper,BtnSend,PopUp} from './styled';
import { formatCpf, formatTelefone } from './formatadores';


const TelaCadastro = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [cepData, setCepData] = useState({
        city: '',
        state: '',
        neighborhood: ''
    });
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        dataNascimento: '',
        telefone: '',
        cep: '',
        cidade: '',
        cpf: '',
        email: '',
        senha: '',
        estado: '',
        bairro: '',
        experiencia: ''
    });
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5010/api/createUser', formData);
            setShowPopup(true); // Exibe o pop-up
            setTimeout(() => setShowPopup(false), 4000);
            setFormData({
                nomeCompleto: '',
                dataNascimento: '',
                telefone: '',
                cep: '',
                cidade: '',
                cpf: '',
                email: '',
                senha: '',
                estado: '',
                bairro: '',
                experiencia: ''
            });

            // Limpa também os dados do CEP se necessário
            setCepData({
                city: '',
                state: '',
                neighborhood: ''
            });
        } catch (error) {
            if (error.response && error.response.status === 400 && error.response.data.message === 'Usuário com o CPF informado já existe') {
                alert('Usuário com o CPF informado já existe. Por favor, insira um CPF diferente.');
            }else if(error.response && error.response.status === 400 && error.response.data.message === 'Usuário com o email informado já existe'){
                alert('Usuário com o email informado já existe. Por favor, insira um EMAIL diferente.');
            } else if(error.response && error.response.status === 400 && error.response.data.message === 'E-mail já está sendo usado por uma empresa') {
                alert('E-mail já está sendo usado por uma empresa.');
            }else {
                console.error('Erro ao criar usuário:', error);
                alert('Erro ao criar usuário. Por favor, tente novamente.');
            }
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        let formattedValue = value;
    
        const digits = value.replace(/\D/g, '');
    
        if (name === 'cpf') {
            formattedValue = formatCpf(value);
        } else if (name === 'telefone') {
            formattedValue = formatTelefone(digits);
        }
    
        console.log(`Name: ${name}, Value: ${value}, Formatted Value: ${formattedValue}`);
    
        setFormData({ ...formData, [name]: formattedValue });
    };
    
    const handleCepChange = async (event) => {
        const cep = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos do CEP
    
        console.log(`CEP Value: ${cep}`);
    
        if (cep.length === 8) { // Verifica se o CEP tem o tamanho correto
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                const data = response.data;
                if (!data.erro) {
                    setCepData({
                        city: data.localidade,
                        state: data.uf,
                        neighborhood: data.bairro
                    });
                    setFormData({
                        ...formData,
                        cep: cep,
                        cidade: data.localidade,
                        estado: data.uf,
                        bairro: data.bairro
                    });
                } else {
                    alert('CEP inválido. Por favor, insira um CEP válido.');
                }
            } catch (error) {
                console.log(error);
            }
        }
    };
    
    


    return (
        <Container>
            <Content>
                <Chamada>
                    <h1>Criar conta <span> - Influenciador</span></h1>
                    <BtnGroup>
                        <BtnChange><a href='cadastro'>Para Influencer</a></BtnChange>
                        <BtnChange><a href='empresa'>Para Empresa</a></BtnChange>
                    </BtnGroup>
                </Chamada>
                <Form >
                    <Wrapper>
                    <input type='text' placeholder='Nome completo' value={formData.nomeCompleto} name='nomeCompleto' onChange={handleInputChange}></input>
                    <input type='date' name='dataNascimento' value={formData.dataNascimento} onChange={handleInputChange}></input>
                    <input type='text' placeholder='Telefone' name='telefone' value={formData.telefone} onChange={handleInputChange}></input>
                    <input type='text' placeholder='Cep' name='cep' onChange={handleCepChange}></input>
                    <p>Obs.: Digite apenas o cep</p>
                    <input type='text' placeholder='Cidade' name='cidade' value={cepData.city} readOnly></input>
                    
                    
                    </Wrapper>
                    
                    <Wrapper>
                    <input type='text' placeholder='CPF' name='cpf' value={formData.cpf} onChange={handleInputChange}></input>
                    <input type='email' placeholder='Email' name='email' value={formData.email} onChange={handleInputChange}></input>
                    <input type='password' placeholder='Senha' name='senha' value={formData.senha}  onChange={handleInputChange}></input>
                    <input type='text' placeholder='Estado' value={cepData.state} readOnly></input>
                    <input type='text' placeholder='Bairro' value={cepData.neighborhood} readOnly></input>
                    </Wrapper>
                </Form>
               
                <BtnSend type='submit' onClick={handleSubmit}>Cadastrar</BtnSend>
            </Content>
            {showPopup && <PopUp>Conta criada com sucesso!</PopUp>}
        </Container>
    )
}
export default TelaCadastro;