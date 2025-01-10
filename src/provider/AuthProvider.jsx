import PropTypes from "prop-types";
import { AuthContext } from "../context/authContext";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import axios from "axios";


const AuthProvider = ({children}) => {
    const [user, setUser]= useState()
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    

    const registerUser =(email, password)=>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, imgPath)=>{
        return updateProfile(auth.currentUser, {displayName:name, photoURL:imgPath})
    }

    const loginUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin =()=>{
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
      const unsubsCribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        if(currentUser?.email){
          const user ={
            email: currentUser?.email
          }
          axios.post(`${import.meta.env.VITE_serverUrl}/jwt`,user,
            {withCredentials:true}
          )
          .then(()=>{
            setLoading(false)
          })

          const date = new Date();

         axios.post(`${import.meta.env.VITE_serverUrl}/user`,{
          ...user, 
          name: currentUser?.displayName,
          photo: currentUser?.photoURL,
          verify: currentUser?.emailVerified,
          role:"client",
          date, 
         })

        }
        else{
          axios.post(`${import.meta.env.VITE_serverUrl}/logOut`,{},
            {withCredentials:true}
          )
          setLoading(true) 
        }

        setLoading(false)
      })
      return ()=>{
        unsubsCribe()
      }
    },[])



    const userLogOut = ()=>{
      setLoading(true)
       return signOut(auth)
    }
    console.log(user)

    const authInfo ={
        user,
        loading,
        registerUser,
        updateUser,
        loginUser,
        googleLogin,
        userLogOut
    }

  



    return(
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    )
};

AuthProvider.propTypes ={
    children: PropTypes.node.isRequired
}

export default AuthProvider;