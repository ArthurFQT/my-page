import styled from "styled-components";

const Card = styled.div`
  width: 90%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px auto;
  color: #333;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  color: #007bff;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Text = styled.p`
  margin-bottom: 15px;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 14px; /* Tamanho da fonte reduzido em telas pequenas */
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3; /* Cor do botão ao passar o mouse */
  }
`;

export { Card, Title, Text, Button };
