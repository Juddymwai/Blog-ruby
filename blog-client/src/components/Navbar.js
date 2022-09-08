import React from "react"
import { Link} from "react-router-dom"

function Navbar(){
    return(
        <div style={{padding: 40+"px", marginLeft:100+ "px"}}>

            <ul className="nav nav-pills" style={{marginTop:20 +"px", marginLeft:1.6 + "em"}}>
            <li className="nav-item">
                <Link to="/" exact class="nav-link " aria-current="page" >HomePage</Link>
            </li>
            <li className="nav-item">
                <Link  to="/publish" exact class="nav-link">Publish</Link>
            </li>
            <li className="nav-item">
                <Link  to="/login" class="nav-link" >Login</Link>
            </li>
            
            </ul>

            <div className="navName">
                <p> </p>
            
                <h1 style={{paddingTop:60 + "px"}}>THE BLOG</h1>
                <p style={{paddingTop: 10+"px"}}> - Follow the latest news and thoughts <br></br> from the developer's Blog</p>
            </div>

            
          


            
            

        </div>
       
    )
}
export default Navbar;