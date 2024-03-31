import React from 'react';
import { FooterSection, MenuFooter, Contato,SocialMedia,FooterEnd } from './styled';
import imgInstagram from '../../assets/images/instagram.png';
import imgFacebook  from '../../assets/images/facebook.png';
import imgTwitter from '../../assets/images/twitter.png';
import { Link } from "react-scroll";
const Footer = () => {
    return(
        <>
        <FooterSection>
            <MenuFooter >
                <h2>Navegação</h2>
                <nav>
                    <ul>
                        <li><a href='#home'>Home</a></li>
                        <li><Link to="quem-somos" smooth={true} duration={1000}><a href='#quem-somos'>Quem somos</a></Link></li>
                        <li><Link to="preco" smooth={true} duration={1000}><a href='#preco'>Preço</a></Link></li>
                        <li><Link to="servicos" smooth={true} duration={1000}><a href='#servicos'>Serviços</a></Link></li>
                        <li className='criarConta'><a href='/cadastro'>Criar Conta</a></li>
                        <li> <a href='/login'>Login </a></li>
                   </ul>
                </nav>
            </MenuFooter>
            <Contato>
                <h2>Contato</h2>
                <p>atendimento@gmail.com</p>
                <p>(00) 00000-0000</p>
            </Contato>
            <SocialMedia>
                <h2>Redes Sociais</h2>
                <div>
                    <img src={imgInstagram} alt='Img Instagram'  />
                    <img src={imgFacebook} alt='Img Facebook'/>
                    <img src={imgTwitter} alt='Img Twitter'/>
                 </div>
            </SocialMedia>
            <FooterEnd>
                <h2>LOGO</h2>
                <p>&copy; Developed by <a href='teste'>Gustavo Aguiar</a></p>
            </FooterEnd>
        </FooterSection>
        </>
    )
}

export default Footer;