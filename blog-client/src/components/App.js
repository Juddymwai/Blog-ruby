import React from "react";
import HomePage from "./HomePage";
import Login from "./Login";
import Navbar from "./Navbar";
import Publish from "./Publish";
import Footer from "./Footer"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"



function App(){

  
    
  return(
    <div style={{background: ""}}>
      <Router >

          <div style={{background: " black"}}>

              <Navbar/>
              

          </div>
      
          <Routes >

            <Route exact path='/' element={<HomePage />}></Route>
            <Route  exact path='/publish' element={<Publish/>}></Route>
            <Route exact path='/login' element={<Login/> }></Route>
              
          </Routes>      
      </Router>
      <Footer/>
      </div>



          
      

  )
}

export default App;