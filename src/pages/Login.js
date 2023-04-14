import React from "react";
import LoginForm from "../components/Login/Login";
import { userLogin } from "../config/setting";
import { HomeTemplate } from "../templates/HomeTemplate/HomeTemplate";
const Login = (props) => {
  if (localStorage.getItem(userLogin)) {
    props.history.push("/");
  }
  return (
    <HomeTemplate>
      <LoginForm navigator={props} />
    </HomeTemplate>
  )
};

export default Login;
