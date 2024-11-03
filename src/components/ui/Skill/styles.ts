import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  height: 40px;
  background-color: #333;
  border: 2px solid black;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Progress = styled.div`
 background: rebeccapurple;
  width: 70%;
  height: 8px;
  border-radius: 10px;

  .skill-progress-fill {
  background: yellow;
  height: 100%;
  border-radius: inherit;
}
`;

export {
    Container,
    Progress,
}