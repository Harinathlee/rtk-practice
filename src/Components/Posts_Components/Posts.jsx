import PostCard from "./PostCard";
import Loader from "../Common_Components/Loader";
import ErrorPage from "../Common_Components/ErrorPage";
import {
  useGetPostsQuery,
  useGetUsersQuery,
} from "../../redux/slices/apiSlice";


const Posts = ({refetch}) => {
  //using rtk-query to fecth data
  const {
    data: posts,
    error: postsError,
    isLoading: postsLoading,
  } = useGetPostsQuery();
  const {
    data: users,
    error: usersError,
    isLoading: usersLoading,
  } = useGetUsersQuery();
 

  //displays loader page if the api is in loading state
  if (postsLoading || usersLoading) return <Loader />;
  //displays error page if any error occurs in fetching data.
  if (postsError || usersError)
    return <ErrorPage error={postsError || usersError} />;
console.log("new posts", posts);

  return (
    <div className="">
      <h1 className="desktop:text-2xl font-bold font-serif text-blue-600 dark:text-blue-300 drop-shadow-lg shadow-blue-300 text-xl">
        Posts
      </h1>
      
      <div className="grid grid-col-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-2 px-2 justify-center">
        {posts?.map((post) => {
          const user = users?.find((user) => user.userId === post.userId);
          return <PostCard key={post.id} post={post} user={user} />;
        })}
      </div>
    </div>
  );
};

export default Posts;

/* 
*This component will get the rtk-query fetched data and render the posts data to UI 
* TODO: Have to refetch and re-render the posts list after adding the new post
*/