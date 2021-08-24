import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.button`
  height: 56px;
  width: 20%;

  background: #f72585;
  border-radius: 10px;

  border: 0;
  color: #fff;
  font-weight: 700;

  margin-top: 20px;
  margin-bottom: 20px;

  &:hover {
    background: ${shade(0.2, "#f72585")};
  }
`;
