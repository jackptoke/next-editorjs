import {
  getFirestore,
  collection,
  addDoc,
  doc,
  DocumentReference,
  DocumentData,
  getDoc,
  setDoc,
} from "firebase/firestore";
import firebaseApp from "./Firebase";

export const db = getFirestore(firebaseApp);

export const addArticle = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "articles"), data);
    return docRef;
  } catch (err) {
    console.log("Failed to save article into the firestore.  Error: ", err);
  }
};

export const addUserDocumentFromAuth = async (userAuth: DocumentData) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    try {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      setDoc(userDocRef, { displayName, email, createdAt });
    } catch (err) {
      console.log(
        "Failed to add authenticated user into the record. Error: ",
        err
      );
    }
  }
  return userDocRef;
};
