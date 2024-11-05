import React, { useState } from "react";
import { Card, Title, Text, Button } from './styles';

const Informaçao: React.FC = () => {

    const [showFullText, setShowFullText] = useState(false);

    const handleToggleText = () => {
        setShowFullText(!showFullText);
    };

    const fullText = `
    Sou um desenvolvedor frontend com 7 meses de experiência, especializado em TypeScript e React. 
    Meu projeto mais relevante foi um sistema de gestão para academias, que permite aos usuários acompanhar 
    seu progresso de forma prática. Estou sempre buscando aprender e crescer, valorizando o trabalho em 
    equipe e a troca de ideias.
`;

  return (
    <Card>
            <Title>Olá, eu sou Arthur Filipe!</Title>
            <Text>
                Sou um desenvolvedor frontend apaixonado pela criação de experiências digitais impactantes. Com 7 meses de experiência na área, tenho me aprofundado em TypeScript.
                {showFullText ? (
                    <span>{fullText}</span>
                ) : (
                    <span> (Clique em "Saiba Mais" para ver mais detalhes)</span>
                )}
            </Text>
            {showFullText ? (
                <Button onClick={handleToggleText}>Ver Menos</Button>
            ) : (
                <Button onClick={handleToggleText}>Saiba Mais</Button>
            )}
        </Card>
  );
};

export default Informaçao;
