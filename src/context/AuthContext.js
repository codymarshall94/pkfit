import React, { useState, useEffect, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const createUser = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setCurrentUser(result.user);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const signIn = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser(result.user);
      navigate("/");
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const signOutUser = async () => {
    try {
      const result = await signOut(auth);
      setCurrentUser(null);
      navigate("/");
      return result;
    } catch (error) {
      throw error;
    }
  };

  /* const getCurrentUser = () => {
    return currentUser;
  };
*/
  return (
    <UserContext.Provider
      value={{
        createUser,
        signIn,
        signOutUser,
        currentUser,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};
