import { React } from "react";
import './Home.css';

import { useNavigate} from 'react-router-dom';


function Home()
{
    const navigate = useNavigate();


const navtobasic = () =>
{
    navigate('/basic')
};


const chatapp = () =>
{
    navigate('/chat')
};


const web = () =>
{
    navigate('/web3')
};


    return (
        <div>
       <div className="flex space-x-4 p-4">

       <div  className="bg-slate-500  h-screen w-screen p-4 text-center hover:bg-slate-900 " onClick={navtobasic}>Freemium</div>
        
        <div className="bg-slate-500  h-screen w-screen p-4 text-center" onClick={chatapp}>Standard</div>

        <div className="bg-slate-500  h-screen w-screen p-4 text-center" onClick={web}>Premium</div>
       </div>

        </div>);
}



export default Home;