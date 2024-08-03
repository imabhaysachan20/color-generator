import ColorList from "../ColorList";
import Form from "../Form";
import { useState } from "react";
import SingleColor from "../SingleColor";
import Values from "values.js";
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  const [color,setColor] = useState(new Values("#000").all(10));

  let addColor = (col)=>{
    try {
      const newColors= new Values(col).all(10);
      setColor(newColors);
    }
    catch (error) {
      toast.error(error.message);
    }
  }
  return <main>
    <Form addColor={addColor}/>
    <ColorList col={color}/>
    <ToastContainer position="top-right"></ToastContainer>
    
    </main>;
};
export default App;
