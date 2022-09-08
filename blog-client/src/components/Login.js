import React, {useState} from "react"
// import {Link} from "react-router-dom"

function Login ({LogIn}){

    // const [input, setInput]=useState({
    //     email:"",
    //     password:""
    // })

    function handleSubmit(e){
        e.preventDefault()
        e.target.reset()
        alert("Welcome back")
    }
    

    return (
        <div style={{margin:"auto", width:'60%' , marginTop: 50 +"px", height: 100+"vh"}}>
            <h2 style={{textAlign:"center"}}>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label  className="form-label" for="exampleFormControlInput1">Email address</label>
                    <input type="email"  name="email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" name="password"  class="form-control" id="exampleInputPassword1"   required/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                {/* <Link to="/publish"> */}
                    <input type="submit" value="Submit" />
                     {/* </Link> */}
            </form>
        </div>
        
       
        
    )
}

export default Login;