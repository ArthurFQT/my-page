import React from "react";
import { Container, Progress } from "./styles";

const SkillComponent: React.FC = () => {
  return (
    <>
      <Container>
        <Progress>
          <div className="skill-progress-fill" style={{ width: "80%" }}></div>
        </Progress>
      </Container>
    </>
  );
};

export default SkillComponent;
