// src/components/AddPostButton.js
import { useState } from "react";
import {
  useAddPostMutation,
  useGetPostsQuery,
} from "../../redux/slices/apiSlice";
import "./Posts_styles.scss";

const AddPost = ({ refetch }) => {
  const [addPost, { isLoading }] = useAddPostMutation();
  const [successMessage, setSuccessMessage] = useState("");

  const handleAddPost = async () => {
    const newPost = {
      userId: 1,
      title: "New Post Title",
      body: "This is the body of the new post.",
    };

    try {
      await addPost(newPost).unwrap();
      setSuccessMessage("Post added successfully!");
      refetch(); // Refetch the posts to update the list
      setTimeout(() => setSuccessMessage(""), 2000); // Hide message after 2 seconds
    } catch (err) {
      console.error("Failed to add the post:", err);
    }
  };

  return (
    <div>
      <button
        className="bg-blue-500 button"
        onClick={handleAddPost}
        disabled={isLoading}
      >
        {isLoading ? "Adding..." : "Add Post"}
      </button>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
    </div>
  );
};

export default AddPost;
