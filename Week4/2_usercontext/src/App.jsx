import Header from "./Components/Header";
import Content from "./Components/Content";
//import the provider
import { UserProvider } from "./Providers/UserProvider";

function App() {
  return (
    <>
      <h2>App</h2>
      {/* wrap the components that need acces to the data in the provider */}
      <UserProvider>
        <Header></Header>
        <Content></Content>
      </UserProvider>
    </>
  );
}

export default App;
