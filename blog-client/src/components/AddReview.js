import React, {useState} from "react";

function AddReview({onHandleAddReview, id, reviews}){
    const [comment, setComment]=useState('')

    function addReviewSubmit(event){
        event.preventDefault()

        const newReviews = {
            comment:comment,
            post_id: id
        }
        fetch (`http://localhost:9292/reviews`,{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(newReviews)

        })
        .then((r) => r.json())
        .then((data) => onHandleAddReview(data))
        // console.log(comment)

        
        
    }
    return (
        <div>
            <form onSubmit={addReviewSubmit}>
            <label  for="exampleFormControlTextarea1" class="form-label">Comment: </label>
                <input type="text" class="form-control" id="exampleFormControlTextarea1" rows="5" onChange={(e)=> setComment(e.target.value)} required/>
                <button type="submit">Add a Comment</button>
                            
                
            </form>

        </div>
    )
       
}

export default AddReview;