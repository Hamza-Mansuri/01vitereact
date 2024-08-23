

import Chai from "./chai"


function App() {
  
  const username = "{Hamza}" //declared a variable

  return (

    // rule to return elements
    //fragment

    //keep First letter Capitalised
    //file ka name bhi jsx hi rakhe. jb koi file me function elements return kr raha hota he jb humko jsx rakhni hoti he file.
    <>
    
    <Chai/>
                                  {/* EXPRESSION IMP (javascript ka final outcome jo evaluate ho chuka he. Evaluated Expression)*/}
    <h1>chai aur react with vite {username}</h1>
    <p>this is para</p>
    </>
  )
}

export default App
