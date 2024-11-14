import { useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

import { auth, provider } from "./firebase.config";
import { useStoreActions, useStoreState } from "./store";

export const useAuth = () => {
  const { user } = useStoreState();
  const { updateUser } = useStoreActions();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      updateUser(currentUser);
    });

    return () => unsubscribe();
  }, [updateUser]);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return { user, handleSignIn, handleSignOut };
};
