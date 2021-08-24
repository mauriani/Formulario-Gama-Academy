import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Input({ name, width, ...rest }: InputProps) {
  return (
    <Container style={{ width: width }}>
      <input {...rest} />
    </Container>
  );
}
