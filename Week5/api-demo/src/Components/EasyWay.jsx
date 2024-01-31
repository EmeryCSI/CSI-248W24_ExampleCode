import { useEffect, useState } from "react";
function EasyWay() {
  //lets make a posts variable that is tracked by state
  const [posts, setPosts] = useState([]);
  //we want to send an api request
  //when the component loads
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((data) => setPosts(data))
  //       .catch((err) => console.log(err));
  //   }, []);
  //we can also use a try/catch
  useEffect(() => {
    //define an async function
    const fetchData = async () => {
      try {
        //try to fetch and get a response
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        //I have a response
        if (!response.ok) {
          throw new Error("Request failed");
        }
        //now we parse to json
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    //call the function
    fetchData();
  }, []);
  return (
    <>
      <h2>Easy Way</h2>
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

export default EasyWay;
