import React from "react";
import { Container, Progress, SkillProgressFill } from "./styles";
import { IconType } from "react-icons"; // Importa a tipagem de ícone

interface ISkillProgress {
    porcent: string;
    Icon?: IconType;
}

const SkillComponent: React.FC<ISkillProgress> = ({ porcent, Icon }) => {
  return (
    <Container>
      <Progress>
        <SkillProgressFill style={{ width: porcent }} /> {/* Usa a prop porcent para a largura */}
      </Progress>
      <p>{porcent}</p>
      {Icon && <Icon size={24} />}
    </Container>
  );
};

export default SkillComponent;
