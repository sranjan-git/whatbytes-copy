// Sudhanshu Ranjan - 12 Nov 2024
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOmYj6FHXvHReq53oMvyjaTYcbvgN2IU4",
  authDomain: "whatbytes-a2725.firebaseapp.com",
  projectId: "whatbytes-a2725",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
