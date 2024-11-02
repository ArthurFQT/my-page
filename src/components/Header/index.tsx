import React, { useState } from "react";
import { Container, Local, Navs } from "./styles";

const Header: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("inicio");

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveItem(id); // Define o item ativo ao clicar
    }
  };

  interface IMenuItem {
    title: string;
    onClick: () => void;
    clicked?: boolean;
  }

  const MenuItem: React.FC<IMenuItem> = ({ title, onClick, clicked = false }) => {
    return <Local clicked={clicked} onClick={onClick}>{title}</Local>;
  };

  return (
    <Container>
      <Navs>
        <MenuItem title="Inicio" onClick={() => handleScrollTo("inicio")} clicked={activeItem === "inicio"} />
        <MenuItem title="Sobre" onClick={() => handleScrollTo("sobre")} clicked={activeItem === "sobre"} />
        <MenuItem title="Projetos" onClick={() => handleScrollTo("projetos")} clicked={activeItem === "projetos"} />
        <MenuItem title="Contato" onClick={() => handleScrollTo("contato")} clicked={activeItem === "contato"} />
      </Navs>
    </Container>
  );
};

export default Header;
