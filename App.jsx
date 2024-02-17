import { useState } from "react"


function App() {
  const [color, setColor] = useState("cyan");

  return (
    <>
      <div className="w-full h-screen duration-200" 
      style={{backgroundColor: color}}
      >

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button onClick={() => setColor("violet")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "violet"}}>violet</button>
            <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
            <button onClick={() => setColor("#87ceeb")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "#87ceeb"}}>Sky Blue</button>
            <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "green"}}>Green</button>
            <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "yellow"}}>Yellow</button>
            <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "orange"}}>Orange</button>
            <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
