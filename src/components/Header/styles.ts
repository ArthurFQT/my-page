import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 10%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 99999;
`;

const Navs = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
`;

interface StyledLinkProps {
    clicked?: boolean;
  }

  const Local = styled.a<StyledLinkProps>`
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  position: relative; 
  padding-bottom: 8px; 
  cursor: pointer;
  transform: ${({ clicked }) => (clicked ? "scale(1.05)" : "scale(1)")};
  transition: transform 0.5s ease; 

  &::after {
    content: "";
    position: absolute;
    left: 0; 
    bottom: 0; 
    height: 3px; 
    width: 100%; 
    background-color: ${({ clicked }) => (clicked ? "#155681" : "transparent")};
    transform: translateX(-100%); 
    transition: transform 0.3s ease, background-color 0.3s ease; 
  }

  &:focus::after,
  &:active::after {
    background-color: #007ACC; 
    transform: translateX(0); 
  }

  ${({ clicked }) => clicked && `
    &::after {
      transform: translateX(0); 
    }
  `}
`;

export { Container, Navs, Local };
