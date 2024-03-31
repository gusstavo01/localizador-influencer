import React, {useState} from 'react'
import axios from 'axios';
import { Container, Content, Chamada,BtnGroup, BtnChange,Form, Wrapper,BtnSend, PopUp} from './styled';
import { formatTelefone, formatCnpj } from '../formatadores';
const TelaCadastroEmpresa = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [cepData, setCepData] = useState({
        city: '',
        state: '',
        neighborhood: ''
    });
    const [formData, setFormData] = useState({
        razaoSocial: '',
        dataCriacao:'',
        telefone: '',
        cep: '',
        cidade: '',
        cnpj: '',
        email: '',
        senha:'',
        estado: '',
        bairro: '',
        
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
              await axios.post('http://localhost:5010/api/createCompany', formData);
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 4000);
            setFormData({
                razaoSocial: '',
                dataCriacao:'',
                telefone: '',
                cep: '',
                cidade: '',
                cnpj: '',
                email: '',
                senha:'',
                estado: '',
                bairro: '',
            });
            setCepData({
                city: '',
                state: '',
                neighborhood: ''
            });
        } catch (error) {
            if(error.response && error.response.status === 400 & error.response.data.message === 'Empresa com CNPJ já cadastrado'){
                alert('Empresa com CNPJ já cadastrado. Por favor, insira um CNPJ diferente.');
            }else if(error.response && error.response.status === 400 & error.response.data.message === 'Usuário com email já cadastrado') {
                alert('Usuário com email já cadastrado. Por favor, insira um email diferente.');
            }else if(error.response && error.status === 400 & error.response.data.message === 'E-mail já está sendo usado por um influenciador') {
                alert('E-mail já está sendo usado por um influenciador');
            }
            else {
                console.error('Erro ao criar usuário:', error);
                alert('Erro ao criar usuário. Por favor, tente novamente.');
            }
        }
    }
    const handleInputChange = (event) => {
        const{ name, value } = event.target;
        let formattedValue = value;
        const digits = value.replace(/\D/g, '');
        if(name ==='cnpj') {
            formattedValue = formatCnpj(value);
        }else if(name === 'telefone'){
            formattedValue = formatTelefone(digits);
        }
        setFormData({...formData, [name]: formattedValue });
    };

    const handleCepChange = async (event) => {
        const cep = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos do CEP
        if (cep.length === 8) { // Verifica se o CEP tem o tamanho correto
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                const data = response.data;
                if (!data.erro) {
                    const updatedFormData = {
                        ...formData,
                        cep: cep,
                        cidade: formData.cidade || data.localidade,
                        estado: formData.estado || data.uf,
                        bairro: formData.bairro || data.bairro
                    };
                    setFormData(updatedFormData);
                    setCepData({
                        city: data.localidade,
                        state: data.uf,
                        neighborhood: data.bairro
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
                    <h1>Criar conta <span> - Empresa</span></h1>
                    <BtnGroup>
                        <BtnChange><a href='cadastro'>Para Influencer</a></BtnChange>
                        <BtnChange><a href='empresa'>Para Empresa</a></BtnChange>
                    </BtnGroup>
                </Chamada>
                <Form>
                    <Wrapper>
                    <input type='text' placeholder='Razão Social' name='razaoSocial' value={formData.razaoSocial}  onChange={handleInputChange}></input>
                    <input type='date' name='dataCriacao' value={formData.dataCriacao} onChange={handleInputChange}></input>
                    <input type='text' placeholder='Telefone' name='telefone' value={formData.telefone}  onChange={handleInputChange}></input>
                    <input type='text' placeholder='Cep' name='cep'   onChange={handleCepChange}></input>
                    <p>Obs.: Digite apenas o cep</p>
                    <input type='text' placeholder='Cidade' name='cidade' value={cepData.city} readOnly></input>
                    
                    
                    </Wrapper>

                    <Wrapper>
                    <input type='text' placeholder='CNPJ' name='cnpj' value={formData.cnpj}  onChange={handleInputChange}></input>
                    <input type='email' placeholder='Email' name='email' value={formData.email}  onChange={handleInputChange}></input>
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
export default TelaCadastroEmpresa;