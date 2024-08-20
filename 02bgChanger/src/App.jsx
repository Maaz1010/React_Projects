import {useState} from "react"

function App() {
  const [color,setColor] = useState("aqua")

  return (
   <>
   <div className="w-full h-screen duration-300" style={{backgroundColor:color}}>
    <div className="fixed  flex-wrap justify-center bottom-10 inset-x-0 px-2">
      <div className="flex flex-wrap shadow-xl justify-center gap-3 bg-slate-200 px-3 py-2 rounded-2xl">
        <button 
        onClick={() => {setColor("red")}}
        className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"red"}}>Red</button>
        <button 
        onClick={() => {setColor("green")}}
        className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"green"}}>Green</button>
        <button 
        onClick={() => {setColor("blue")}}
        className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"blue"}}>Blue</button>
      </div>
    </div>
   </div>
   </> 
  )
}

export default App
