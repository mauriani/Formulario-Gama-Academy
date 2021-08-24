import React, { SelectHTMLAttributes } from "react";

import { Container } from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}
export function Select({ label, name, options, ...rest }: SelectProps) {
  return (
    <Container>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>
          {label}
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </Container>
  );
}
