import { React } from "react";
import './Auth.css';
import firebase from './firebase';
import Navbar from './Navbar';
import Home from './Home';


import {useAuthState} from 'react-firebase-hooks/auth'


const auth = firebase.auth();



function Auth()
{

    const [user] = useAuthState(auth);

    return (
        <section>
        <Navbar name = {user}/>
        {user ?<Home/>:<SignIn/>}
     </section>
    );
}


function SignIn()
{
   const SignInWithGoogle = () =>
   {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
   }
   return(<div> 
        
    <div className='  bg-gray-700 h-screen w-fill text-white'>
      <div>
         <br/>
         <div className=' flex justify-center p-10'>
         <button className=' bg-slate-600 p-4 align-middle rounded-md'>Login in with Google
         <img onClick={SignInWithGoogle} src={process.env.PUBLIC_URL+"google-logo.png"} width="192" alt="second logo" ></img>
         </button>
         </div>
         <div className=' p-5 text-center text-xl '><p>Please create your google account </p></div>
         <div className=' p-1 text-center text-xl '><p>if not present </p></div>
         </div>
</div>
</div>);
}



export default Auth;