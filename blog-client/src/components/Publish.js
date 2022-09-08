import React, {useState} from "react";
import NewPostForm from "./NewPostForm";



function Publish(){

    const [newBlogPost, setNewBlogPost]=useState([])
    const [user, setUser]=useState([])

    const admin={
        email:"admin@gmail.com",
        password:"admin"
    }


    function LogIn(input){
        console.log(input)

         
            // if (input.email == admin.email && input.password == admin.password){
                    
            //     setUser({

            //         email: input.email,
            //         password: input.password
            //     })
                

            // }

            // else{
            //         setUser("details")
            //     }
        

    }


    function handleAddPost(newData){

        setNewBlogPost([...newBlogPost, newData])

        
    }
    

    
    return (
        <div >
            {/* {(user.email !== "") ? ("") : (<LogIn LogIn = {LogIn}/>) } */}
            <NewPostForm onHandleAddPost={handleAddPost} />
            
        </div>

    )
}

export default Publish;