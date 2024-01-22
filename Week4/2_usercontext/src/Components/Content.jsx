import { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
function Content() {
  //we useContext and pass in the context to get access to the user
  const { user } = useContext(UserContext);
  return (
    <>
      {user ? (
        <div>
          <h4>Welcome {user.name}</h4>
          <p>Here is the exclusive content</p>
        </div>
      ) : (
        <div>
          <h4>Please login for exclusive content</h4>
        </div>
      )}
    </>
  );
}

export default Content;
