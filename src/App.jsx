import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  const [bgcolor, setBgColor] = useState("");
  const [data, displayData] = useState([]);
  console.log(text);
  // console.log(color);
  // console.log(bgcolor);
  
let obj={
  bgcolor,
  color,
  text,
}
let handleClick=()=>{
  displayData([...data,obj])
  console.log(data);
  
}
  return (
    <>
      <div className="container">
        <label htmlFor="bgcolor"> 
          Background Color
          </label>
          <input
            type="color"
            id="bgcolor"
            onChange={(e) =>setBgColor(e.target.value)}
          />
         
      
        <label htmlFor="color">
          Enter text color
          </label>
          <input
            type="color"
            id="color"
            onChange={(e) =>setColor(e.target.value)}
          />
   
        <label htmlFor="text">
          Text Here
          </label>
          <input type="text" id="text" placeholder="Text here..."onChange={(e)=> setText(e.target.value)}/>
     <button onClick={handleClick}>Add</button>
      </div>
      <div className="item-main">
        {data.map((datas,index)=>{
  return(
    <div className="item" style={{backgroundColor:datas.bgcolor, color:datas.color}} key={index}>{datas.text}</div>
  )
        })}


      </div>
    </>
  );
}

export default App;
