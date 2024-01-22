//import the context from the provider
import { UserContext } from "../Providers/UserProvider";
import { useContext, useState } from "react";
function Header() {
  //To get the data that we need from the provider
  //We call the useContext function and pass it
  //The context that we imported
  const { user, login, logout } = useContext(UserContext);
  //lets create a local state variable to track the userName
  const [username, setUsername] = useState("");
  return (
    <>
      {/* I want to conditionally render on thing if the user is logged in */}
      {/* and something else if the user is not logged */}
      {user ? (
        <div>
          <p>{user.name} is Logged in</p>
          <button onClick={logout}>Log out</button>
        </div>
      ) : (
        <div>
          <h4>Please Log in</h4>
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <button onClick={() => login(username)}>Log In</button>
        </div>
      )}
    </>
  );
}

export default Header;
