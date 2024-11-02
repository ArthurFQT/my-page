import React from "react";
import { Container, Local, Navs } from "./styls";

const Header: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      <Navs>
        <Local onClick={() => handleScrollTo("inicio")}>Inicio</Local>
        <Local onClick={() => handleScrollTo("sobre")}>Sobre</Local>
        <Local onClick={() => handleScrollTo("projetos")}>Projetos</Local>
        <Local onClick={() => handleScrollTo("contato")}>Contato</Local>
      </Navs>
    </Container>
  );
};

export default Header;
