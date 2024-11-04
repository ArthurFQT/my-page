import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  height: 40px;
  background-color: #333;
  border: 2px solid black;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
`;

const Progress = styled.div`
  background: white;
  width: 80%;
  height: 8px;
  border-radius: 10px;
`;

const SkillProgressFill = styled.div`
  background: black;
  height: 100%;
  border-radius: inherit;
`;

export { Container, Progress, SkillProgressFill };
