import React from "react";
// import Button from "@material-ui/core/Button";

const SingAndLogin = ({
  handleInputChange,
  handleSing,
  userAndEmail,
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
        <div classNameName="form-group">
          <label for="exampleInputEmail1">
            Enter your Information for sign ...
          </label>
          <input
            type="text"
            value={userAndEmail}
            name="userAndEmail"
            onChange={handleInputChange}
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="email address or username ..."
          ></input>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1"></label>
          <input
            type="text"
            value={password}
            name="password"
            onChange={handleInputChange}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          ></input>
        </div>
        <button type="button" onClick={handleSing} className="btn btn-danger">
          Sign in
        </button>
        &nbsp; &nbsp;
        <button type="button" onClick={handleSing} className="btn btn-primary">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SingAndLogin;
