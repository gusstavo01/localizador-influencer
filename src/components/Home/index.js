import React, {useState} from 'react'
import { Container, Menu,ButtonLogin,Logo, Chamada, BtnChamada, ChamadaTexto, ChamadaImg, MenuMobile,MenuIcon } from './styled';
import { Link } from "react-scroll";
import chamadaImg from '../../assets/images/localizador.png';
import menuIcon from '../../assets/images/menu.png';
const Header = () =>{
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!document.getElementById('menu-mobile').contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
  
    // Adiciona o ouvinte de evento quando o menu está aberto
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
  
    // Limpa o ouvinte de evento quando o componente é desmontado ou o menu é fechado
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isMenuOpen]); // Dependências do useEffect
  
  return (
    <div id='home'>
    <Container>
        <Logo>Logo</Logo>
       <Menu>
        
        <ul>
            <li><a href='#home'>Home</a></li>
            <li><Link to="quem-somos" smooth={true} duration={1000}><a href='#quem-somos'>Quem somos</a></Link></li>
            <li><Link to="preco" smooth={true} duration={1000}><a href='#preco'>Preço</a></Link></li>
            <li><Link to="servicos" smooth={true} duration={1000}><a href='#servicos'>Serviços</a></Link></li>
            <li className='criarConta'><a href='/cadastro'>Criar Conta</a></li>
            <li> <a href='/login'><ButtonLogin>Login</ButtonLogin> </a></li>
        </ul>
       </Menu>
       <MenuIcon src={menuIcon} alt='menu-mobile' onClick={toggleMenu}/> 
       <MenuMobile id="menu-mobile" style={{transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)'}}>
      
       <ul>
            <li onClick={toggleMenu}><a href='#home'>Home</a></li>
            <li><Link to="quem-somos" onClick={toggleMenu} smooth={true} duration={1000}><a href='#quem-somos'>Quem somos</a></Link></li>
            <li><Link to="preco" onClick={toggleMenu} smooth={true} duration={1000}><a href='#preco'>Preço</a></Link></li>
            <li><Link to="servicos" onClick={toggleMenu} smooth={true} duration={1000}><a href='#servicos'>Serviços</a></Link></li>
            <li className='criarConta'><a href='/cadastro'>Criar Conta</a></li>
            <li > <a href='/login'>Login </a></li>
        </ul>
       </MenuMobile>
       
    </Container>
    <Chamada>
      <ChamadaTexto>
            <h1>Conecte-se</h1>
            <p>com Influenciadores locais e impulsione o seu negócio!</p>
            <BtnChamada>Comece agora</BtnChamada>
      </ChamadaTexto>
      <ChamadaImg src={chamadaImg}></ChamadaImg>
    </Chamada>
    </div>
  )
}

export default Header;