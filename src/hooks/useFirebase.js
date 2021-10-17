import { useEffect, useState } from 'react';
import firebaseInitialize from '../Firebase/firebase.init';
import { GoogleAuthProvider, getAuth,signOut , signInWithPopup, onAuthStateChanged } from "firebase/auth";

firebaseInitialize()
const auth = getAuth()

const useFirebase = () => {
    const [user, setUser] = useState([])

    const googleProvider = new GoogleAuthProvider()

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut=()=>{
        signOut(auth)
        .then(result=> setUser([]))
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUser(user)
                // ...
              } else {
                setUser([])
                // User is signed out
                // ...
              }
        })
    },[])

    

   



    return {
        googleSignIn, user,setUser,logOut
    }
};

export default useFirebase;