import React from "react";

import { Header } from "../../components/Header";
import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";

import { Container, Content, Dados } from "./styles";
import { Select } from "../../components/Form/Select";

export function Register() {
  return (
    <Container>
      <Header />

      <Content>
        <h2>Dados Pessoais</h2>

        <Input name="name" placeholder="Nome Completo" width={"50%"} />

        <Input
          name="cargoPretendido"
          placeholder="Cargo pretendido"
          width={"50%"}
        />

        <Dados>
          <Input name="date" id="date" type="date" width={"auto"} />
          <Select
            name="estadoCivil"
            label="Selecione o estado civil"
            options={[
              {
                value: "Casado(a)",
                label: "Casado(a)",
              },

              {
                value: "Solteiro(a)",
                label: "Solteiro(a)",
              },

              {
                value: "Viúvo(a)",
                label: "Viúvo(a)",
              },
              {
                value: "Divorciado(a)",
                label: "Divorciado(a)",
              },
            ]}
          />

          <Select
            name="estadoCivil"
            label="Slecione o sexo"
            options={[
              {
                value: "Femino",
                label: "Femino",
              },

              {
                value: "Masculino",
                label: "Masculino",
              },
            ]}
          />
        </Dados>

        <h3>Endereço</h3>

        <Input name="endereco" placeholder="Endereço" width={"50%"} />

        <Dados>
          <Input name="bairro" placeholder="Bairro" width={"50%"} />

          <Input name="cidade" placeholder="Cidade" width={"50%"} />
        </Dados>

        <Dados>
          <Input
            name="cep"
            placeholder="cep"
            type="text"
            id="cep"
            width={"50%"}
          />
          <Input
            id="telefoneFixo1"
            name="telefoneFixo1"
            placeholder="Telefone fixo"
            type="tel"
            width={"50%"}
          />
        </Dados>

        <Dados>
          <Input
            id="phone"
            name="celular"
            placeholder="Celular"
            pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
            type="tel"
            width={"40%"}
          />

          <Input
            name="email"
            type="email"
            placeholder="Email"
            id="email"
            pattern=".+@globex\.com"
            required
            width={"60%"}
          />
        </Dados>

        <h3>Documentos</h3>

        <Dados>
          <Input name="identidade" placeholder="Indentidade" width={"50%"} />
          <Input name="cpf" placeholder="CPF" width={"50%"} />
        </Dados>

        <Dados>
          <Select
            name="veiculo"
            label="Possuí veículo"
            options={[
              {
                value: "Sim",
                label: "Sim",
              },

              {
                value: "Não",
                label: "Não",
              },
            ]}
          />

          <Select
            name="habilitacao"
            label="Habilitação"
            options={[
              {
                value: "Sim",
                label: "Sim",
              },

              {
                value: "Não",
                label: "Não",
              },
            ]}
          />
        </Dados>

        <Button type="submit">Enviar dados</Button>
      </Content>
    </Container>
  );
}
