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
    };
  }

  handleLogin = () => {
    const user = checkUser(this.state.inputPassword, this.state.inputEmail);

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      // Refresh halaman agar halaman login ditampilkan setelah logout
      window.location.reload();
    } else {
      alert("Email atau Password Salah!");
    }
  };

  handleLogout = () => {
    localStorage.removeItem("user"); // Hapus user dari localStorage
    // Refresh halaman agar halaman login ditampilkan setelah logout
    window.location.reload();
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
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
    const storedUser = localStorage.getItem("user");
    const user = JSON.parse(storedUser);

    return (
      <>
        <Header user={user} onClick={this.handleLogout} />
        <p></p>
        {user ? this.buildLoggedInPage() : this.buildNotLoggedInPage()}
      </>
    );
  }
}
export default Body;
