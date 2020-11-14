import React from "react";
import { Link } from "react-router-dom";

const SingAndLogin = ({
  handleInputChange,
  handleSignIn,
  handleSignUp,
  email,
  username,
  password,
}) => {
  return (
    <div
      style={{
        textAlign: "center",
        width: "20%",
        marginLeft: "40%",
        marginTop: "10%",
      }}
    >
      <form>
        <div className="form-group">
          <label>Enter your Information for sign ...</label>
          <input
            type="text"
            value={email}
            name="email"
            onChange={handleInputChange}
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Email address"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={username}
            name="username"
            onChange={handleInputChange}
            className="form-control"
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleInputChange}
            className="form-control"
            placeholder="Password"
          />
        </div>
        <Link to="/" className="btn btn-danger" onClick={handleSignIn}>
          Sign in
        </Link>
        <Link
          to="/"
          type="button"
          style={{ marginLeft: "20px" }}
          onClick={handleSignUp}
          className="btn btn-primary"
        >
          Sign up
        </Link>
      </form>
    </div>
  );
};

export default SingAndLogin;
