//I import a css file
import "./App.css";
//import a component
import UserCard from "./Components/UserCard";
import StyledInComponent from "./Components/StyledInComponent";
import StyleWithProps from "./Components/StyleWithProps";
function App() {
  const users = [
    {
      username: "user1",
      phone: "123-456-7890",
      email: "user1@example.com",
      address: "123 First Street, Anytown, USA",
    },
    {
      username: "user2",
      phone: "234-567-8901",
      email: "user2@example.com",
      address: "456 Second Street, Anytown, USA",
    },
    {
      username: "user3",
      phone: "345-678-9012",
      email: "user3@example.com",
      address: "789 Third Street, Anytown, USA",
    },
  ];

  return (
    <>
      <h2>This is the App Component.</h2>
      <UserCard
        userName={"test user"}
        phone={"123-456-7890"}
        email={"none@none.com"}
        address={"123 Nowhere St"}
      />
      <h2>This component is styled in the component</h2>
      <StyledInComponent
        userName={"test user"}
        phone={"123-456-7890"}
        email={"none@none.com"}
        address={"123 Nowhere St"}
      ></StyledInComponent>
      <h2>This component is styled with props</h2>
      <StyleWithProps
        userName={"test user"}
        phone={"123-456-7890"}
        email={"none@none.com"}
        address={"123 Nowhere St"}
        color={"white"}
        backgroundColor={"darkblue"}
      ></StyleWithProps>
      <StyleWithProps
        userName={"test user"}
        phone={"123-456-7890"}
        email={"none@none.com"}
        address={"123 Nowhere St"}
        color={"blue"}
        backgroundColor={"orange"}
      ></StyleWithProps>
      <h2>These cards are rendered using the array data</h2>
      {/* render a userCard for each user in the users collection */}
      {users.map((user, index) => {
        return (
          <UserCard
            key={index}
            userName={user.username}
            phone={user.phone}
            email={user.email}
            address={user.address}
          ></UserCard>
        );
      })}
    </>
  );
}

export default App;
