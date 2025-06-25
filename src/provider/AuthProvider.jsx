import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const provider = new GoogleAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  }

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    return signOut(auth);
  };


  const updateUserProfile = (userData) => {
    return updateProfile(auth.currentUser, {
      displayName: userData.name,
      photoURL: userData.photoURL
    });
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:", user);
        setUser(user);
        setLoading(false);
      } else {
        console.log("No user is logged in");
        setLoading(false);
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    loginUser,
    registerUser,
    logoutUser,
    user,
    loading,
    setLoading,
    updateUserProfile,
    googleLogin
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
