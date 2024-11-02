import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 10%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
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
  /* text-shadow: ${({ clicked }) => (clicked ? '0px 0px 10px #007ACC' : 'none')}; */

  &:hover {
    text-shadow: 0px 0px 10px #007ACC;
  }

`;

export { Container, Navs, Local };
