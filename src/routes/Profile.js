import { authService } from "myBase";
import React from "react";
import { useHistory } from "react-router-dom";

const Profile = () => <span>Profile</span>;
export default () => {
  const history = useHistory();
  const onSignOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <>
      <button onClick={onSignOutClick}>Sign Out</button>
    </>
  );
};
