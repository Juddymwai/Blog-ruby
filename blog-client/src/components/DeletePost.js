import React, {useState} from "react";
import EditPost from "./EditPost";




function DeletePost({onDeletePost, id, onUpdatedBody, currentUser}){

    // const [isEditing, setIsEditing]= useState(false);
    // const isCurrentUser = currentUser.Author === Author;
    


    function handleDeleteClick(){
        fetch (`http://localhost:9292/reviews/${id}`, {
            method: "DELETE",
            headers:{"Content-Type": "application/json"}
        
        })
        onDeletePost(id)
    }

    function handleUpdatedBody(updatedBody){
        // setIsEditing(false);
        onUpdatedBody(updatedBody)
    }





return (
    
    <div>
        <EditPost  id={id} onUpdatedBody={handleUpdatedBody}/>

        <button onClick= {handleUpdatedBody}>
        <span role="img" aria-label="edit">
              ✏️
            </span>
            
            </button>



    <button onClick={handleDeleteClick}> <span role="img" aria-label="delete">
              🗑</span></button>


    </div>
)}


export default DeletePost;