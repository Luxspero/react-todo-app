import React from "react";
import Header from "./Header";
import Todolist from "../pages/Todolist";
import Login from "../pages/Login";
import { checkUser } from "../database/User";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputPassword: "Password",
      inputEmail: "",
      user: null,
    };
  }

  handleLogin = () => {
    const user = checkUser(this.state.inputPassword, this.state.inputEmail);

    if (user) {
      this.setState({
        user: user,
      });
    } else {
      alert("Email atau Password Salah!");
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(name);
  };

  buildNotLoggedInPage() {
    return (
      <>
        <Login
          inputEmail={this.state.inputEmail}
          inputPassword={this.state.inputPassword}
          onInputChange={this.handleInputChange}
          onLogin={this.handleLogin}
        />
      </>
    );
  }
  buildLoggedInPage() {
    return (
      <>
        <Todolist />
      </>
    );
  }

  render() {
    return (
      <>
        <Header user={this.state.user} />
        <p></p>
        {this.state.user
          ? this.buildLoggedInPage()
          : this.buildNotLoggedInPage()}
      </>
    );
  }
}
export default Body;
