import UserCard1 from './UserCard1.jsx'
import UserCard2 from "./UserCard2.jsx";

function App(){
  return (
    <div>

      <h1>React Non-Parameterized Props</h1>
      <UserCard1 name="John Doe" age={30} />
      <hr />
      <h1>React Parameterized Props</h1>
      <UserCard2 name="John Doe" age={30} />
    </div>
  );
}

export default App
