// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { postAdded } from "./postsSlice";
// import { selectAllUsers } from "../users/userSlice";

// const AddPostForm = () => {
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [userId, setUserId] = useState("");

//   const users = useSelector(selectAllUsers);

//   const onTitleChange = e => setTitle(e.target.value);
//   const onContentChange = e => setContent(e.target.value);
//   const onAuthorChange = e => setUserId(e.target.value);

//   const onSavePostClicked = () => {
//     if (title && content) {
//       dispatch(postAdded(title, content, userId));
//       setTitle("");
//       setContent("");
//     }
//   };

//   const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

//   const userOptions = users.map(user => (
//     <option key={user.id} value={user.id}>
//       {user.name}
//     </option>
//   ));

//   return (
//     <section>
//       <h2>Add a New Post</h2>
//       <form>
//         <label htmlFor="postTitle">Post Title:</label>
//         <input
//           type="text"
//           id="postTitle"
//           name="postTitle"
//           value={title}
//           onChange={onTitleChange}
//         />
//         <label htmlFor="postAuthor">Author:</label>
//         <select id="postAuthor" value={userId} onChange={onAuthorChange}>
//           <option value=""></option>
//           {userOptions}
//         </select>
//         <label htmlFor="postContent">Content:</label>
//         <textarea
//           name="postContent"
//           id="postContent"
//           value={content}
//           onChange={onContentChange}
//         ></textarea>
//         <button onClick={onSavePostClicked} type="button" disabled={!canSave}>
//           Save Post
//         </button>
//       </form>
//     </section>
//   );
// };

// export default AddPostForm;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = e => setTitle(e.target.value);
  const onContentChange = e => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded({ id: nanoid(), title, content }));
    }
    setTitle("");
    setContent("");
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="psotTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor="postContent">Content:</label>
        <input
          type="text"
          value={content}
          name="postContent"
          id="postContent"
          onChange={onContentChange}
        />
        <button onClick={onSavePostClicked} type="button">
          Save
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
