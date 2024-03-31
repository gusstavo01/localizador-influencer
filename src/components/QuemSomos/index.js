import React from 'react';
import { Container, Wrapper, Missao, Visao, Valores} from './styled';

const QuemSomos = () => {
    return(
        <div id='quem-somos'>
        <Container>
            <h1>Quem Somos ?</h1>
            <p>Nosso compromisso é estabelecer conexões sólidas entre você e influenciadores locais de destaque em sua região. Com uma ampla rede de contatos e um profundo conhecimento do cenário local, nossos sistemas foram meticulosamente projetados para oferecer oportunidades únicas de colaboração que impulsionarão o seu negócio para novos patamares de sucesso.</p>
        </Container>
        <Wrapper>
            <Missao>
                <h2>Missão</h2>
                <p>Facilitar conexões autênticas entre empresas e influenciadores locais, impulsionando parcerias eficazes que promovam o crescimento mútuo.</p>
            </Missao>
            <Visao>
                    <h2>Visão</h2>
                    <p>Ser reconhecido como líder na facilitação de colaborações entre empresas e influenciadores, tanto local quanto globalmente.</p>
            </Visao>
            <Valores>
                
                <h2>Valores</h2>
                
               <ol>
                    <li><p>Autenticidade:</p> Promover relacionamentos genuínos e transparentes.</li>
                    <li><p>Inovação:</p> Buscar constantemente soluções criativas e tecnologicamente avançadas.</li>
                    <li><p>Integridade:</p> Agir com honestidade e ética em todas as interações.</li>
                    <li><p>Excelência:</p> Superar expectativas e buscar resultados excepcionais.</li>
                    <li><p>Colaboração:</p> Valorizar o trabalho em equipe e parcerias construtivas.</li>
               </ol>
                    
            </Valores>
        </Wrapper>
        </div>
    )
}

export default QuemSomos;