import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="Profile">
      Profile
    <Link to="/auth">Auth</Link>
    <Link to="/">Home</Link>
    </div>
  );
}

export default Profile;
