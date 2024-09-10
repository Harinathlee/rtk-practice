import PostCard from './PostCard';
import useFetchData from '../useFetchData';
import Loader from '../Common_Components/Loader';
import ErrorPage from '../Common_Components/ErrorPage';

const Posts = () => {
  //using custom hook to fetch the data from api
  const {data:posts , error:postsError , loading:postsLoading} = useFetchData('https://jsonplaceholder.typicode.com/posts');
  const {data:users , error:usersError , loading:usersLoading} = useFetchData('https://jsonplaceholder.typicode.com/users');
 //displays loader page if the api is in loading state
  if (postsLoading || usersLoading) return <Loader />;
 //displays error page if any error occurs in fetching data.
  if (postsError || usersError) return <ErrorPage error={postsError || usersError}/>; 
 
  return (
    <div className=''>
      <h1 className='desktop:text-2xl font-bold font-serif text-blue-600 dark:text-blue-300 drop-shadow-lg shadow-blue-300 text-xl'>Posts</h1> 
    <div className='grid grid-col-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-2 px-2 justify-center'>
      {posts?.map((post) => {
        const user = users?.find((user) => user.id === post.userId);
        return <PostCard key={post.id} post={post} user={user} />;
      })}
    </div>
    </div>
  );
};

export default Posts;
