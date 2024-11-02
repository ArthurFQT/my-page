import React from "react";
import { Seçao } from "../../styles/Secao";
import { Container, SocialLinks } from "./styles";
import Spacer from "../ui/spacer";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Inicio: React.FC = () => {
  return (
    <Seçao id="inicio">
      <Container>
        <h1>Olá! Eu sou Arthur Filipe</h1>
        <p>
          Sou um desenvolvedor frontend de João Pessoa - PB, apaixonado por
          criar experiências incríveis na web. Com 17 anos, tenho me
          especializado em desenvolvimento utilizando React e TypeScript,
          buscando sempre trazer inovação e eficiência aos projetos em que
          trabalho. Se você está procurando alguém para transformar suas ideias
          em realidade, vamos fazer algo juntos? Estou animado para colaborar e
          criar soluções que façam a diferença!
        </p>
        <Spacer height="20px" />
        <h2>Minhas redes</h2>
        <Spacer height="10px" />
        <SocialLinks>
      <a href="https://github.com/ArthurFQT" target="_blank" rel="noreferrer">
        <FaGithub size={40} />
      </a>
      <a href="https://www.linkedin.com/in/arthur-filipe-644219331/" target="_blank" rel="noreferrer">
        <FaLinkedin size={40} />
      </a>
    </SocialLinks>
      </Container>
    </Seçao>
  );
};

export default Inicio;
