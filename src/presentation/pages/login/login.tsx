import React, { useState, useEffect } from "react";
import Styles from "./login-styles.scss";
import Context from "@/presentation/contexts/form/form-context";

import {
  LoginHeader,
  Input,
  Footer,
  FormStatus,
} from "@/presentation/components";
import { Validation } from "@/presentation/protocols/validation";

type Props = {
  validation: Validation;
};

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: "",
    password: "",
    emailError: "Campo obrigatório",
    passwordError: "Campo obrigatório",
    mainError: "",
  });
  useEffect(() => {
    validation.validate("email", state.email);
  }, [state.email]);
  useEffect(() => {
    validation.validate("password", state.password);
  }, [state.password]);

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <button
            disabled
            data-testid="submit"
            className={Styles.submit}
            type="submit"
          >
            Entrar
          </button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  );
};

export default Login;
