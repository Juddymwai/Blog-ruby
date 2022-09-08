// import React, {useState} from "react";

// function EditPost({id, Content, Author, Title, onUpdatedBody}){
//     const [edit, setEdit]= useState(Content);

//     function handleSubmitForm(e){
//         e.preventDefault();
//         fetch (`http://localhost:9292/posts/${id}`, {
//             method:"PATCH",
//             headers:{
//                 "Content-Type":"application/json",
//             },
//             body: JSON.stringify({
//                 Content: edit,
//             }),
//         })
//         .then ((r) => r.json())
//         .then((updatedBody) => onUpdatedBody(updatedBody));
//     }
//     return(
//         <form onSubmit={handleSubmitForm}>
//             {/* <input 
//             type="text"
//             value={edit}
//             onChange={(e) => setEdit(e.target.value)}
//             /> */}
//             {/* <input type="submit" value="save"/> */}

//         </form>
//     )

// }

// export default EditPost;