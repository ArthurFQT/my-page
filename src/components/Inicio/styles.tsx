import styled from "styled-components";

const Container = styled.div`
  h1 {
    font-size: 5.7rem; /* Tamanho base */

    /* Ajustes responsivos */
    @media (max-width: 1200px) {
      font-size: 4.5rem; /* Para telas menores que 1200px */
    }

    @media (max-width: 900px) {
      font-size: 3.5rem; /* Para telas menores que 900px */
    }

    @media (max-width: 600px) {
      font-size: 2.5rem; /* Para telas menores que 600px */
    }
  }

  p {
    width: 700px; /* Largura fixa */

    /* Ajustes responsivos */
    @media (max-width: 900px) {
      width: 90%; /* Para telas menores que 900px, ocupa 90% da largura */
    }

    @media (max-width: 600px) {
      width: 100%; /* Para telas menores que 600px, ocupa 100% da largura */
    }
  } 
`;

const SocialLinks = styled.div`
  display: flex; /* Para exibir os links lado a lado */
  gap: 1rem; /* Espaçamento entre os ícones */

  a {
    color: #fff; /* Cor padrão dos ícones */
    transition: color 0.3s ease, transform 0.3s ease; /* Transição suave para a cor e transformação */

    &:hover {
      /* Efeito de hover para o link do GitHub */
      &:nth-child(1) {
        color: #333; /* Cor padrão do ícone do GitHub */
        transform: scale(1.1); /* Aumenta o tamanho do ícone */
      }

      /* Efeito de hover para o link do LinkedIn */
      &:nth-child(2) {
        color: #0077b5; /* Cor específica para o LinkedIn */
        transform: scale(1.1); /* Aumenta o tamanho do ícone */
      }
    }
  }
`;
export { Container, SocialLinks };
