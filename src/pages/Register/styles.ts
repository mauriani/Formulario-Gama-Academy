import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;

  border-radius: 40px;

  h3 {
    margin-top: 10px;
  }
`;

export const Dados = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 100px;
  width: 50%;

  margin-top: 10px;
`;
