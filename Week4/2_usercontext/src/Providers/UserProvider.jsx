import { createContext, useState } from "react";
//Step 1 - create a context that can be imported
export const UserContext = createContext();

//Step 2 - Create a provider component
//The provider component has all of the info we want to share
export function UserProvider(props) {
  //define a state variable to hold the user
  const [user, setUser] = useState(null);

  //function to login
  //takes a username and sets the name prop to username
  const login = (username) => {
    setUser({ name: username });
  };
  //logout function
  const logout = () => {
    setUser(null);
  };
  //step 3 - return the provider component. Pass all of the shared
  //information to a value prop.
  //render children inside of the provider
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}
