import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext(null);
const Provider = new GoogleAuthProvider()
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null);
    const [loading,setloading] = useState(true)
   
    const googleSignin =() =>{
        return signInWithPopup(auth,Provider);
    }

    const Signup = (email,password) =>{
        setuser(null);
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const Signin = (email,password) =>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
        
    }
    const Updateprofile = (name,photo) =>{
              return  updateProfile(auth.currentUser, {       
                 displayName: name,
                  photoURL: photo
      })
    }
    console.log(user)

    
    const LogOut = () => {
        setloading(true)
        signOut(auth).then(() => {
            console.log("success");
        }).catch((error) => {
            console.log("error");
        });
    }
    // console.log(user);
    
    useEffect(() =>{
        const UnSubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setuser(currentUser);
            console.log("State Change");
            setloading(false)
        });
        return(() =>{
            return UnSubscribe();
        })
        
    },[googleSignin,Signin])

    
      
    const userInfo = 
    {
        googleSignin,
        loading,
        Signup,
        user,
        Signin,
        LogOut,
        Updateprofile
      
      
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;