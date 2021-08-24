import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  background: #c4c4c4;

  border: 2px solid #c4c4c4;
  color: #232129;

  padding: 16px;
  margin-top: 10px;
  margin-left: 4px;
  margin-right: 4px;

  height: 50px;

  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }
`;
