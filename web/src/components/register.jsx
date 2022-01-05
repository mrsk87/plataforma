import React from "react";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

getDatabase();
const db = getFirestore();

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

  registerUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      getAuth(),
      this.state.email,
      this.state.password
    )
      .then(async (response) => {
        // Successful
        console.log(response.user.uid);
        console.log("vou gravar na firestore");

        //gravar na firestore
        try {
          const docRef = doc(db, "users", response.user.uid);
          await setDoc(docRef, {
            email: this.state.email,
            nome: this.state.nome,
            localidade: this.state.localidade,
          });
          console.log("Document written with ID: ", response.user.uid);
        } catch (e) {
          console.error("Error adding document: ", e);
        }

        //window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <form onSubmit={this.registerUser}>
        <h1>Register</h1>
        <input
          type="nome"
          name="nome"
          placeholder="nome"
          onChange={this.updateInput}
          value={this.state.nome}
        />
        <input
          type="localidade"
          name="localidade"
          placeholder="localidade"
          onChange={this.updateInput}
          value={this.state.localidade}
        />
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
