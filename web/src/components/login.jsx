import React from "react";
import firebase from "./firebase";
import authSt from "./authState";
import { collection, addDoc } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const database = getDatabase();

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addUser = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        console.log(getAuth().currentUser.email);
        window.location.href = "/";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  render() {
    console.log("A cena é" + database);
    console.log(getAuth());
    return (
      <form onSubmit={this.addUser}>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={this.updateInput}
          value={this.state.email}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={this.updateInput}
          value={this.state.password}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default User;
