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

   