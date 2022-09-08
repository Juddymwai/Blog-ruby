import React, {useState, useEffect}from "react";
import AddReview from "./AddReview";
import DeletePost from "./DeletePost";



function HomePage(){
    const [blogPost, setBlogPost]=useState([]);
    const [newReview,setNewReview]=useState([])
    

    useEffect(()=>{
        fetch('http://localhost:9292/posts')
     
        .then((r)=> r.json())
        .then((data)=> setBlogPost(data))
    }, [newReview])




  function handleDeletePost(id){
    const updatedPost = blogPost.filter((p) => p.id !== id);
    setBlogPost(updatedPost)

  }

  // function handleDeletePost(id){
  //   const updatedPost = blogPost.filter((p) => p.id !== id);
  //   setBlogPost(updatedPost)

  // }

  
    

    return (
     <div style={{margin:"auto", width:'60%', marginTop: 50 +"px", marginBottom: 30+ "px"}}>
        <h3 style={{textAlign:'center'}}>Highlights</h3>
        <div style={{overflow:'scroll', height: 700+ "px"}}>
            {blogPost.map((post) => {
            return (          
                <div style={{marginBottom: 20+"px"}} class="card text-center"  key={post.id} >
                <div class="card-header">
                 <p> Published ~ {new Date(post.created_at).toLocaleDateString()} - {new Date(post.created_at).toLocaleTimeString()} </p>
                </div>
                <div className="card-body" key={post.id}>
                  <h5 className="card-title"><span><h4 class="btn btn-primary">{post.Author}</h4> </span> |{post.Title} </h5>
                  <p className="card-text">{post.Content}</p>

                  <span>{post.reviews.map((review)=> {
                  
                    return <p style={{color: 'blue'}}>{review.name}:
                     <span style={{textAlign:'left', color: 'black'}}>{review.comment}</span>  {new Date(review.created_at).toLocaleTimeString()} <DeletePost onDeletePost={handleDeletePost} id={review.id}/></p>
                    
                  }
                  )}</span>
                  {/* <h4 class="btn btn-primary">Add Comment</h4> */}
                  <AddReview onHandleAddReview={handleAddReview} id={post.id}/> 

                  <DeletePost onDeletePost={handleDeletePost} id={post.id}/>

                  {/* <button class="btn btn-primary" onClick={handleDeletePost}>Delete</button> */}

                </div>
                <div class="card-footer text-muted">
                  
                </div>
              </div>
              
            )
        })}  
        
     </div>
  </div>

    )
}

export default HomePage;
