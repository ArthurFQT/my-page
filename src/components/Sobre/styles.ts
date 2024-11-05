import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ContentBox = styled.div`
  width: 80%;
  max-width: 500px;
  padding: 20px 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: rgba(255, 255, 255, 0.3); 
  border: 2px solid rgba(0, 0, 5, 0.5);  */
`;

export {
    Container,
    Box,
    ContentBox,
}