import React from "react";
import MainMenu from "./MainMenu";

const UserLogin = (props) => {
  if (props.isLoggedIn) {
    return <MainMenu />;
  } else {
    return <h2>Please Login</h2>;
  }
};

export default UserLogin;
