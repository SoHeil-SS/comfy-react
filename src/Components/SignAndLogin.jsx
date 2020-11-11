import React from "react";

const SingAndLogin = ({
  handleInputChange,
  handleMode,
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
          ></input>
        </div>
        <div className="form-group">
          <input
            type="text"
            value={username}
            name="username"
            onChange={handleInputChange}
            className="form-control"
            placeholder="Username"
          ></input>
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleInputChange}
            className="form-control"
            placeholder="Password"
          ></input>
        </div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            handleMode("showProduct");
            handleSignIn();
          }}
        >
          Sign in
        </button>
        <button
          type="button"
          style={{ marginLeft: "20px" }}
          onClick={() => {
            handleMode("showProduct");
            handleSignUp();
          }}
          className="btn btn-primary"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SingAndLogin;
