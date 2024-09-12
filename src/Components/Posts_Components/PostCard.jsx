import { HeartIcon, TrashIcon } from '@heroicons/react/24/solid';

import './Posts_styles.scss';

const PostCard = ({ post, user }) => {
  return (
    <div className="post-card mobile:w-full ">
      <div className="post-header">
          <span className="user-name ml-20 font-bold underline">{user.userName}</span>
          <span className='float-right border border-black px-1 rounded '>Likes: {post.likes}</span>
      </div>
      <div className="post-content">
        <h3 className='font-semibold'> {post.title} </h3>
        <p>{post.content}</p>
      </div>
      <div className="post-actions">
        <button className="button like-button"><HeartIcon className="min-h-5 min-w-5 mr-2" />Like</button>
        <button className="button delete-button"><TrashIcon className="min-h-5 min-w-5 mr-2" />Delete</button>
      </div>
    </div>
  );
};

export default PostCard;
