import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Dan Russel",
    Job: "Software Engineer",
    Status: "Single"
  }
  const secondPerson = {
    name: "Elizabeth",
    Job: "Nurse",
    Status: "Married",
    salary: "$1400"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Core Concepts
        </p>
        <h1>{secondPerson.name + " ," + " " + "Job: " + secondPerson.Job + "," + " " + "Salary:" + secondPerson.salary}</h1>
        <h1>this is a heading typed in react application</h1>
        <h2> {person.name}: {(2 + 5) * 25 + 65} </h2>
        <h3>{person.Job}</h3>
        <h4>{person.Status}</h4>

      </header>
    </div>
  );
}

export default App;
