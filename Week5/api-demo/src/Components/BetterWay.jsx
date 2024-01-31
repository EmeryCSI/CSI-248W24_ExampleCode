import { useState, useEffect } from "react";
import { fetchPosts } from "../Data/PostRepository";
function BetterWay() {
  //posts need to be tracked by state
  const [posts, setPosts] = useState([]);
  //track if the data is loading or not
  const [loading, setLoading] = useState(true);
  //lets track if there was an error
  const [error, setError] = useState(null);
  //we need a useEffect that runs once on component render
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) return <h2>Loading... please wait</h2>;
  if (error) return <h2>There was an error {error}</h2>;
  return (
    <>
      <h2>Better Way</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default BetterWay;
