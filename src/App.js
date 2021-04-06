import logo from './logo.svg';
import './App.css';

function App() {
  const emplopees = ['Dan', 'Sammy', 'Rony'];
  const dataList = [
    {
      name: 'Russel',
      job: 'Doctor',
      salary:'$200',
      city:'London',
      country: "Uk",
      experience:"2 years"

    },
    {
      name: 'Sara',
      job: 'Architect',
      salary:'$400',
      city:'New York',
      country: "USA",
      experience:"8 years"

    },
    {
      name: 'Natasha',
      job: 'Programmer',
      salary:'$800',
      city:'Delhi',
      country: "India",
      experience:"3 years"

    },
    {
      name: 'Kenedy',
      job: 'Automobile Engineer',
      salary:'$2000',
      city:'Boston',
      country: "Uk",
      experience:"10 years"

    }  
  ]
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
  var newStyle = {
    color: "black",
    backgroundColor: 'yellow',
    fontFamily: 'courier',
    fontSize: '30px',
    fontWeight: 'bold'
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Core Concepts
        </p>
        <h1 style={newStyle}>{secondPerson.name + "," + " " + "Job: " + secondPerson.Job + "," + " " + "Salary:" + secondPerson.salary}</h1>
        <h1>this is a heading typed in react application</h1>
        <h2 style={{ color: "black", backgroundColor: 'yellow', fontFamily: 'courier', fontSize: '30px', fontWeight: 'bold' }}> {person.name}: {(2 + 5) * 25 + 65} </h2>
        <h3>{person.Job}</h3>
        <h4>{person.Status}</h4>

      </header>
      <main>
        <PersonOne name="Rubel" job="Senior Executive" salary="$700"></PersonOne>
        <PersonOne name="Daniel" job="Developer" salary="$1400"></PersonOne>
        <PersonOne name={emplopees[0]}></PersonOne>
        <div style={{display:'flex'}}>
        <EmplopeesData name={dataList[0].name} job={dataList[0].job} salary={dataList[0].salary} city={dataList[0].city} country={dataList[0].country} experience={dataList[0].experience}></EmplopeesData>
        <EmplopeesData name={dataList[1].name} job={dataList[1].job} salary={dataList[1].salary} city={dataList[1].city} country={dataList[1].country} experience={dataList[1].experience}></EmplopeesData>
        <EmplopeesData name={dataList[2].name} job={dataList[2].job} salary={dataList[2].salary} city={dataList[2].city} country={dataList[2].country} experience={dataList[2].experience}></EmplopeesData>
        <EmplopeesData name={dataList[3].name} job={dataList[3].job} salary={dataList[3].salary} city={dataList[3].city} country={dataList[3].country} experience={dataList[3].experience}></EmplopeesData>
        </div>
      </main>
    </div>
  );
}

function PersonOne(props) {
  const personOneStyle = {
    backgroundColor: 'pink',
    fontFamily: 'cursive'
  }
  const salary = {
    color: 'white',
    backgroundColor: '#2225ff',
    fontSize: '25px',
    fontWeight: 'bolder',
    borderRadius: '5px',
    border: '5px solid red'
  }
  return (
    <div >
      <h1 style={personOneStyle}>Name :{props.name}</h1>
      <h2>Job : {props.job}</h2>
      <p style={salary}>Salary : {props.salary}</p>
    </div>
  )
}
// Object Data passing

function EmplopeesData(props) {
 const dataStyle={
   color:'black',
   backgroundColor:'gold',
   width:'50%',
   border:'3px solid black',
   borderRadius:'5px',
   margin:'3px'
 }
  return (
    <div style={dataStyle}>
      <h1 style={{fontSize:'26px'}}>Name : {props.name}</h1>
      <h2 style={{fontSize:'16px'}}>Job : {props.job}</h2>
      <h3>Salary : {props.salary}</h3>
      <h4>City : {props.city}</h4>
      <h5>Country : {props.country}</h5>
      <h6>Experience : {props.experience}</h6>
    </div>
  )
}

export default App;
