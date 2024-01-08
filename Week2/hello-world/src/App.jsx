//Make a Components
//A Component is just a function
//Rules of Components
//#1 You have to export it before you can use it
//#2 You can only return one element

//Before we can use a component we have to import it
import Heading from "./Components/Heading";
import MyList from "./Components/MyList";
function App() {
  //create an array
  const numbers = [5, 10, 15, 20, 25, 30, 35];
  return (
    <>
      {/* We pass information to props similarly to using an HTML attribute */}
      <Heading headerText="Hello World"></Heading>
      <Heading headerText="Welcome to React"></Heading>
      <p>CSI-248</p>
      <p>This is my first React App</p>
      {/* We are rendering the myList component and passing
      our numbers array to a prop named numbers */}
      <MyList numbers={numbers}></MyList>
    </>
  );
}

//We have to export the function to be able to use it
//in main.jsx
export default App;
