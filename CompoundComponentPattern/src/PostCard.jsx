function PostCard({ children }) {
  return <div className='bg-gray-200 w-72 p-4 mt-10 ml-12'>{children}</div>;
}

PostCard.Title = function PostCardTitle({ post }) {
  return <h2 className=' font-semibold text-xl'>{post.title}</h2>;
};

PostCard.Content = function PostCardContent({ post }) {
  return <p className='my-2'>{post.content}</p>;
};

PostCard.Author = function PostCardAuthor({ post }) {
  return <p className='text-gray-500'>by {post.user.name}</p>;
};

PostCard.Buttons = function PostCardButtons() {
  return (
    <div className='flex gap-2 mt-5'>
      <button className='p-2 bg-blue-200'>Read more</button>
      <button className='p-2 bg-blue-200'>Coments</button>
    </div>
  );
};

export default PostCard;
