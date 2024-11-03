import React from "react";
import { Seçao } from "../../styles/Secao";
import { Box, Container, ContentBox } from "./styles";
import Spacer from "../ui/spacer";
import SkillComponent from "../ui/Skill";

const Sobre: React.FC = () => {
  return (
    <Seçao id="sobre">
      <Container>
        <Box>
          <h2>Skills</h2>
          <Spacer height="10px" />
          <ContentBox>
            <SkillComponent />
          </ContentBox>
        </Box>
        <Box>
          <h2>Informaçoes</h2>
          <Spacer height="10px" />
          <ContentBox>
            <h3>ahahaha</h3>
          </ContentBox>
        </Box>
      </Container>
    </Seçao>
  );
};

export default Sobre;
