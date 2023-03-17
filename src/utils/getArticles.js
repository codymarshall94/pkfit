import { addDoc, getDocs, getDoc } from "firebase/firestore";
import { doc, collection } from "firebase/firestore";
import { db } from "../firebase-config";

export const createArticle = async (article) => {
  await addDoc(collection(db, "articles"), article);
};

export const getArticle = async (id) => {
  const docRef = doc(db, "articles", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id };
  } else {
    return null;
  }
};

export const getArticles = async () => {
  //grab the articles and then add the doc id to the object
  const articles = [];
  const querySnapshot = await getDocs(collection(db, "articles"));
  querySnapshot.forEach((doc) => {
    articles.push({ ...doc.data(), id: doc.id });
  });
  return articles;
};
