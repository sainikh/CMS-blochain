import { React } from "react";
import './Auth.css';
import firebase from './firebase';
import { useNavigate} from 'react-router-dom';

const auth = firebase.auth();

function Navbar(props)
{ 

    const navigate = useNavigate();

    const navtohome = () => 
    {
        auth.signOut();
        navigate('/');
    };
    
    return (
        <div>
         <div className = ' flex flex-row bg-black h-fill w-fill text-white p-4 '>
        <div className = 'flex flex-auto w-56 p-4 text-2xl font-bold' >Blocks OF CMS</div> 
        {props.user ? < div > </div>:<div className='flex flex-row w-20'><button onClick={navtohome} className=' h-15 bg-zinc-800 rounded-md p-4 border-2 hover:bg-blue-900  '>Logout</button > </div>}
         <div className = ' m-1' > 
         </div>
         </div>
        </div>);
}



export default Navbar;