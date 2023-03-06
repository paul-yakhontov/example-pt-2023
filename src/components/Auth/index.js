import React from "react";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <div className="Auth">
      Auth
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default Auth;
