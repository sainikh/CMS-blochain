import { React ,useState,useEffect} from "react";
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";

import './Welcome.css';

import 'grapesjs-blocks-basic';
import 'grapesjs/dist/css/grapes.min.css';
// import Login from './Login';


function Grapes()
{ 
    const [ editor,setEditor] = useState(null);


 useEffect(() => {
   const editor = grapesjs.init ({
    container:"#editor",
    plugins: [gjsPresetWebpage],
    pluginsOpts:{
      gjsPresetWebpage:{},
    }
   });
   setEditor(editor);
 }, []);
 
    return (
        <div id="editor">
       
        </div>);
}

export default Grapes;