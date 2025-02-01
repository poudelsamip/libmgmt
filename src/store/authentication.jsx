import { createContext, useContext } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const logIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const logOut = () => {
    signOut(auth);
    console.log(auth.currentUser.email);
  };

  return (
    <AuthContext.Provider value={{ logIn, signUp, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
