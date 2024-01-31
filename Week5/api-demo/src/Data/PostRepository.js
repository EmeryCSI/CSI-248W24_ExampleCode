//first lets bring in axios
import axios from "axios";
//lets also define a base_url
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

//Now I want a function that I can import into my components
export const fetchPosts = async () => {
  //axios is a lot simpler to use
  //axios.get(url, {parameters})
  try {
    //create a three second delay
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await axios.get(BASE_URL);
    //it automatically check for ok and automatically
    //parse to json
    return response.data;
  } catch (error) {
    throw error;
  }
};
