
import { GithubAuthProvider, GoogleAuthProvider , getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebase.init";
import { useState } from "react";



const Login = () => {
   
    const [user, setUser]= useState(null)


    const auth = getAuth(app)

    console.log(app)

    const GoogleProvider = new GoogleAuthProvider();

    const GithubProvider = new GithubAuthProvider();


    
     const handleGooglesign = () => {
        
        signInWithPopup(auth, GoogleProvider)

        .then((result)=>{

             const LoggedUser = result.user;

             console.log(LoggedUser)
             setUser(LoggedUser)


        })

        .catch( error => {

           console.log('error find', error.message)

        } )

     }

     const handleGit = () => {
     signInWithPopup(auth, GithubProvider)
     .then( result => {
       const logedUser = result.user;
       console.log(logedUser);

       setUser(logedUser);


     } )
     .catch()


     }


     const handleSignOut = () => {

      signOut(auth)
      .then( result => {
          console.log(result)
         setUser(null)

      })
      .catch( error => {
          console.log(error)

      } )

     }
    

    return (

        <div>
        <div className=" flex justify-center items-center">
               
          {   user ?
               <button className="  text-xl btn bg-blue-500 ml-5"  onClick={handleSignOut}>sign out</button> :
               <>
               <button onClick={handleGooglesign} className="  text-xl btn bg-blue-500">Login</button>

               <button onClick={handleGit}  className=" text-xl btn bg-blue-500 ml-5 ">Github</button>
               </>

          }
                   

           
               
             
            
        </div>

         <div className=" flex justify-center ">
        { user && <div className=" text-center mt-10 font-bold text-2xl">

           <h1> user: {user.displayName}  </h1>

           <p> {user.email} </p>

           <img className=" " src={user.photoURL} alt="" />
           
           </div>}

           </div>

        </div>
    );
};

export default Login;