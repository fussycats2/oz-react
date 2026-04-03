import { useState, useEffect} from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => post.userId === userId)

  return (
    <div>
      <h1>Post List</h1>
      <div>
        <input 
        type="number" 
        placeholder="UserId"
        // value={userId}
        onChange={(e) => setUserId(Number(e.target.value))}
         />
         <p>User Id: {userId}</p>
      </div>
      {filteredPosts.map((post) => (
        <PostItem key={post.id} post={post} /> 
      ))}
    </div>
  );
};

export default PostList;

const PostItem = ({ post }) => {
  return (
    <div key={post.id}>
      <h2>
        {post.id}. {post.title}
      </h2>
    <p>{post.body}</p>
    <p>User ID: {post.userId}</p>
  </div>    
  );
};