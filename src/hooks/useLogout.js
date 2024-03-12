import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { doc, updateDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { projectFirestore, projectAuth } from "../firebase/config";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch, user } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      //update user online status
      const { uid } = user;
      await updateDoc(doc(projectFirestore, "user", uid), {
        online: false,
      });

      // sign the user out
      await signOut(projectAuth);

      // dispatch logout action
      dispatch({ type: "LOGOUT" });

      // update state
      if (!isCancelled) {
        setError(null);
      }
      
      setIsPending(false);

    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { logout, error, isPending };
};
