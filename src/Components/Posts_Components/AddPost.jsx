// src/components/AddPostButton.js
import { useState } from "react";
import { useAddPostMutation } from "../../redux/slices/apiSlice";
import "./Posts_styles.scss";
import PostForm from "./AddPostForm";
import ErrorPage from "../Common_Components/ErrorPage";

const AddPost = ({ refetch }) => {
  const [addPost, { isLoading }] = useAddPostMutation();
  const [showForm , setShowForm] = useState(false);
  const [postData, setPostData] = useState(null);
  const [showSuccess , setShowSuccess] = useState(false);
  const [showError , setShowError] = useState(false);
  const handleAddPost = () => {
    setShowForm(true);
  };

  const handleFormSubmit = async (data) => {
    console.log('Post Data:', data);
    setPostData(data);
    setShowForm(false);
    try {     
      await addPost(postData).unwrap();
      refetch(); // Refetch the posts to update the list
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000); // Hide message after 2 seconds
    } catch (err) {
      setShowError(true);
      setTimeout(() => setShowError(false), 2000); 
      console.error("Failed to add the post:", err);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="bg-blue-500 button w-fit"
        onClick={handleAddPost}
        disabled={isLoading}
      >
        Add New Post
      </button>
      {showForm && <PostForm onSubmit={handleFormSubmit} />}
      {showSuccess && (
        <div className="mt-4">
        <p className="font-bold text-green-500">Post added succesfully</p>
        </div>
      )} 
        {showSuccess && (
        <div className="mt-4">
        <p className="font-bold text-red-500">Failed to added succesfully</p>
        </div>
      )} 
    </div>
  );
};

export default AddPost;
