import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

type IProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ ...rest }: IProps) {
  return <Container type="button" {...rest}></Container>;
}
