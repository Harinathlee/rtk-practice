import './Posts_styles.scss';

const PostCard = ({ post, user }) => {
  return (
    <div className="post-card mobile:w-full ">
      <div className="post-header">
          <span className="user-name font-bold underline">{user.username}</span>
      </div>
      <div className="post-content">
        <h3 className='font-semibold'> {post.title} </h3>
        <p>{post.body}</p>
      </div>
      <div className="post-actions">
        <button className="button like-button">Like</button>
        <button className="button comment-button">Comment</button>
        <button className="button share-button">Share</button>
      </div>
    </div>
  );
};

export default PostCard;
