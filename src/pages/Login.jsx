import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const Login = ({ inputEmail, inputPassword, onInputChange, onLogin }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3>Please Login first!</h3>
          <label
            htmlFor="email"
            className="input input-bordered flex items-center gap-2"
          >
            Email
            <Input
              className="grow"
              type="email"
              name="inputEmail"
              value={inputEmail}
              onChange={onInputChange}
            />
          </label>
          <br />
          <label
            htmlFor="password"
            className="input input-bordered flex items-center gap-2"
          >
            Password
            <Input
              className="grow"
              type="password"
              name="inputPassword"
              value={inputPassword}
              onChange={onInputChange}
            />
          </label>
          <br />
          <Button modelBtn="btn-accent" type="submit" onClick={onLogin}>
            Login
          </Button>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Login;
