import './App.css'
import ContactList from "./ContactList";
import Post from "./Post";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Xavier",
  lastName: "Rice",
};

const hello = <h1>Hello {formatName(user)}</h1>


function App() {
  return (
  <div className='App'>
    {hello}
    <h2>Feed</h2>
    <Post/>
    <Post/>
    <ContactList/>
    </div>
  )
}
export default App
