import React, {useState} from "react";
// import {useHistory} from "react-router-dom"


function NewPostForm({onHandleAddPost, setIsFilledIn}){
    // const navigate= useNavigate();
    // const navigateHome=()=>{
    //     navigate('/')
    // }
   
   

    // const history = useHistory();
    const [title, setTitle]=useState('')
    const [content, setContent]=useState('')
    const [author, setAuthor]=useState('')



    function handleSubmit(e){
         e.preventDefault()
        //  setIsFilledIn(true)
        //  history.push("/")
        e.target.reset();

    
        const newObj = {
            "Title":title,
            "Content":content,
            "Author": author
        }
        fetch("http://localhost:9292/posts", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newObj)

        })
        .then((resp) => resp.json())
        .then((newBlog) => onHandleAddPost(newBlog) )

        alert("You have a new Post Added, navigate to the home page to view it")
        

    }
    

    return (
        <div style={{margin:"auto", width:'60%', height: 100+"vh", color:"blue"}}>
            <h1 style={{textAlign:"center", marginTop: 50 +"px"}}>Create A New Post</h1>

            <form className="mb-3" onSubmit={handleSubmit}>

                <div>

                    <label for="exampleFormControlInput1" class="form-label">Title:      </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title"  onChange={(e)=>setTitle(e.target.value)} required/>
                </div>

                <div className="mb-3">
                    <label  for="exampleFormControlTextarea1" class="form-label">Content: </label>
                    <textarea type="text" class="form-control" id="exampleFormControlTextarea1" rows="5" onChange={(e)=>setContent(e.target.value)} required/>
                </div>

                <div className="mb-3">
                    <label >Author: </label>

                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Author"  onChange={(e)=>setAuthor(e.target.value)} required/>
                </div>
           
               <button type="submit">Submit New Post</button>
       

            </form> 
        </div>
       
    )
}
export default NewPostForm;
