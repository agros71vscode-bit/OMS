import {
  collection,
  addDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export async function createActivity(
  data: any
) {
  return await addDoc(
    collection(db, "activities"),
    data
  );
}