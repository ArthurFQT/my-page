import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  height: 40px;
  background-color: #fff;
  /* border: 2px solid black; */
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
  color: #000;
`;

const Progress = styled.div`
  background: #000;
  width: 80%;
  height: 8px;
  border-radius: 10px;
`;

const SkillProgressFill = styled.div`
  background: #0056b3;
  height: 100%;
  border-radius: inherit;
`;

export { Container, Progress, SkillProgressFill };
