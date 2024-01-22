import { useState } from "react";

function Conditional(props) {
  //lets add a boolean state variable
  const [show, setShow] = useState(false);
  // function that toggles show
  function toggle() {
    //we never change a state variable directly
    //we let react do it for us
    setShow((show) => !show);
  }
  // when using an if else for conditional
  // rendering you need to be outside of the
  // return statement
  //using an if
  if (props.isLoading) {
    return (
      <>
        <h2>Loading...</h2>
        <p>This is using an if</p>
      </>
    );
  }
  // because we had a return statement locked behind an if
  //We dont need an else. It is implied.
  return (
    <>
      <h2>Not Loading</h2>
      {/* we cannot use an if in here */}
      {/* Conditional rendering with ternary */}
      {show ? (
        <div>
          <h2>Show is true</h2>
          <p>The is using a ternary</p>
        </div>
      ) : (
        <div>
          <h2>Show is false</h2>
          <p>This is using ternary</p>
        </div>
      )}
      {/* Using a logical && */}
      {show && (
        <div>
          <h2>Show is true</h2>
          <p>This is using logical && operator</p>
        </div>
      )}

      <button onClick={toggle}>Toggle Show</button>
    </>
  );
}

export default Conditional;
