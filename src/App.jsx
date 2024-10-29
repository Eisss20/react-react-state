import "./App.css";
import { useState } from "react";

function App() {
const [clickShow,setClickshow] = useState("Greeting Message")

const handleClickShow = (text) => {
return setClickshow(text)
}

  return (
    <div className="App">
      <div className="greeting-container">{clickShow}</div>
      <div className="buttons">
        {/* <button onClick={ ()=>setClickshow("สวัสดี")}> สวัสดี!</button>
        <button onClick={()=> setClickshow("Hi")}>Hi!</button>
        <button onClick={()=> setClickshow("你好!")}>Hi!!</button> */}
        <button onClick={()=> handleClickShow("สวัสดี")}>สวัสดี!</button>
        <button onClick={()=> handleClickShow("Hi!")}>Hi!</button>
        <button onClick={()=> handleClickShow("你好!")}>"你好!" </button>
      </div>
    </div>
  );
}

export default App;
