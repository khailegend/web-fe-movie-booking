import React from "react";
import RegisterForm from "../components/Register/Register";
import { userLogin } from "../config/setting";
import { HomeTemplate } from "../templates/HomeTemplate/HomeTemplate";
const Register = (props) => {
  if (localStorage.getItem(userLogin)) {
    props.history.push("/");
  }
  return (
    <HomeTemplate>
      <RegisterForm navigator={props} />
    </HomeTemplate>
  )
};

export default Register;
