import { useEffect, useState, useRef } from "react";
import { projectFirestore } from "../firebase/config";
import {
  onSnapshot,
  query,
  where,
  orderBy,
  collection,
} from "firebase/firestore";

export const useCollection = (collectionName, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  const queryRef = useRef(_query).current;
  const orderByRef = useRef(_orderBy).current;

  useEffect(() => {
    let ref = collection(projectFirestore, collectionName);

    if (queryRef) {
      ref = query(ref, where(...query));
    }
    if (orderByRef) {
      ref = query(ref, orderBy(...orderBy));
    }

    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        // update state
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("could not fetch the data");
      }
    );

    // unsubscribe on unmount
    return () => unsubscribe();
  }, [collectionName, queryRef, orderByRef]);

  return { documents, error };
};
