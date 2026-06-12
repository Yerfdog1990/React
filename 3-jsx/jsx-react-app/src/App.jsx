
const name = "React";
const version = "18.3.1";
const programmingLanguage = ["JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "Go", "Rust", "Swift", "Kotlin", "R"];
const isLoggedIn = false;
function App(){
  return(
      <div className="container">
        <h1>JSX in React</h1>
        <h3>2.1: Embedding javascript expressions</h3>
        <p>You are running {name} version {version}</p>
        <h3>2.2: Conditional rendering</h3>
        <div className="conditional" style={{backgroundColor: isLoggedIn ? "lightgreen" : "lightcoral", padding: "10px", borderRadius: "5px"}}>
          {isLoggedIn ? <p>Welcome to the dashboard</p> : <p>Please login</p>}
        </div>
        <h3>2.2: List rendering</h3>
        <ul>
          {programmingLanguage.map((language, index) => <li key={index}>{language}</li>)}
        </ul>
      </div>
  );
}

export default App;
