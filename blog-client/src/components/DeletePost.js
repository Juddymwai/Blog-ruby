import React, {useState} from "react";
// import EditPost from "./EditPost";




function DeletePost({onDeletePost, id, onUpdatedBody, currentUser}){

    // const [isEditing, setIsEditing]= useState(false);
    // const isCurrentUser = currentUser.Author === Author;
    


    function handleDeleteClick(){
        fetch (`http://localhost:9292/posts/${id}`, {
            method: "DELETE",
            headers:{"Content-Type": "application/json"}
        
        })
        onDeletePost(id)
    }

    // function handleUpdatedBody(updatedBody){
    //     // setIsEditing(false);
    //     onUpdatedBody(updatedBody)
    // }





return (
    
    <div>
        {/* <EditPost  id={id} onUpdatedBody={handleUpdatedBody}/>

        <p type="button" onClick= {handleUpdatedBody} style={{backgroundColor:"rgb(37, 35, 35)"}}>
        <span role="img" aria-label="edit"> ✏️ </span>  */}
        
        
       {/* <p><span type="button" onClick={handleDeleteClick} style={{backgroundColor:"rgb(37, 35, 35)"}}> 
         */}
        <p> <span  type = "button" onClick={handleDeleteClick}role="img" aria-label="delete">
        🗑</span> </p>


    </div>
)}


export default DeletePost;