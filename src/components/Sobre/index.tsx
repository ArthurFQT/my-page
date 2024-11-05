import React from "react";
import { Seçao } from "../../styles/Secao";
import { Box, Container, ContentBox } from "./styles";
import Spacer from "../ui/spacer";
import SkillComponent from "../ui/Skill";
import { IoLogoReact, IoLogoHtml5 } from "react-icons/io5";
import { RiCss3Fill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiStyledcomponents } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import Informaçao from "../ui/Info";

const Sobre: React.FC = () => {
  return (
    <Seçao id="sobre">
      <Container>
        <Box>
          <h2>Skills</h2>
          <Spacer height="10px" />
          <ContentBox>
            <SkillComponent porcent="100%" Icon={IoLogoHtml5} />

            <Spacer height="16px" />
            <SkillComponent porcent="95%" Icon={RiCss3Fill} />

            <Spacer height="16px" />
            <SkillComponent porcent="80%" Icon={IoLogoReact} />

            <Spacer height="16px" />
            <SkillComponent porcent="60%" Icon={BiLogoTypescript} />
            <Spacer height="16px" />

            <SkillComponent porcent="95%" Icon={SiStyledcomponents} />
            <Spacer height="16px" />

            <SkillComponent porcent="90%" Icon={FaGitAlt} />
          </ContentBox>
        </Box>
        <Box>
          <h2>Informaçoes</h2>
          <Spacer height="10px" />
          <ContentBox>
            <Informaçao />
          </ContentBox>
        </Box>
      </Container>
    </Seçao>
  );
};

export default Sobre;
