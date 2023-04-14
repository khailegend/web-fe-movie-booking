import React from "react";
import UserInformation from "../components/UserInformation/UserInformation";
import { userLogin } from "../config/setting";
import { HomeTemplate } from "../templates/HomeTemplate/HomeTemplate";

const Profile = (props) => {
  if (!localStorage.getItem(userLogin)) {
    props.history.push("/");
  }

  return ( 
    <HomeTemplate>
      <UserInformation />
    </HomeTemplate>
  )
};

export default Profile;
