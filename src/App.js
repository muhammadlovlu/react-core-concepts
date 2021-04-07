import logo from './logo.svg';
import './App.css';

function App() {
  let emplopees = ['Dan', 'Sammy', 'Rony', ' Kevin', 'Nick', 'Jorge', 'Mike', 'Dazy', 'kathy'];
  const dataList = [
    {
      name: 'Russel',
      job: 'Doctor',
      salary: '$200',
      city: 'London',
      country: "Uk",
      experience: "2 years"

    },
    {
      name: 'Sara',
      job: 'Architect',
      salary: '$400',
      city: 'New York',
      country: "USA",
      experience: "8 years"

    },
    {
      name: 'Natasha',
      job: 'Programmer',
      salary: '$800',
      city: 'Delhi',
      country: "India",
      experience: "3 years"

    },
    {
      name: 'Kenedy',
      job: 'Automobile Engineer',
      salary: '$2000',
      city: 'Boston',
      country: "Uk",
      experience: "10 years"

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
  // product object details
  const products = [{
    name: 'Dell Monitor',
    model: 'X34333',
    release: '14 oct 2018',
    color: 'black',
    price: '$250',
    availability: 'Yes'
  },
  {
    name: 'Asus mouse',
    model: 'x320',
    release: '14 Jan 2019',
    color: 'white',
    price: '$75',
    availability: 'No'
  },
  {
    name: 'Asus keyboard',
    model: 'X23',
    release: '10 Aug 2020',
    color: 'Pink',
    price: '$400',
    availability: 'Yes'
  },
  {
    name: 'Macbook Air',
    model: 'X1439',
    release: '25 March 2024',
    color: 'Grey',
    price: '$2199',
    availability: 'Coming Soon'
  },
  {
    name: 'Macbook Pro',
    model: 'X1755',
    release: '25 Feb 2024',
    color: 'Grey',
    price: '$3199',
    availability: 'Coming Soon'
  }
  ]
  const employeesAllName = dataList.map(employeeName => employeeName.name);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Core Concepts
        </p>
        <ul>

        </ul>

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
        <div style={{ display: 'flex' }}>
          <EmplopeesData name={dataList[0].name} job={dataList[0].job} salary={dataList[0].salary} city={dataList[0].city} country={dataList[0].country} experience={dataList[0].experience}></EmplopeesData>
          <EmplopeesData name={dataList[1].name} job={dataList[1].job} salary={dataList[1].salary} city={dataList[1].city} country={dataList[1].country} experience={dataList[1].experience}></EmplopeesData>
          <EmplopeesData name={dataList[2].name} job={dataList[2].job} salary={dataList[2].salary} city={dataList[2].city} country={dataList[2].country} experience={dataList[2].experience}></EmplopeesData>
          <EmplopeesData name={dataList[3].name} job={dataList[3].job} salary={dataList[3].salary} city={dataList[3].city} country={dataList[3].country} experience={dataList[3].experience}></EmplopeesData>
        </div>
        <Product name={products[0].name} model={products[0].model} release={products[0].release} color={products[0].color} price={products[0].price} availability={products[0].availability}></Product>
        <Product name={products[1].name} model={products[1].model} release={products[1].release} color={products[1].color} price={products[1].price} availability={products[1].availability}></Product>
        <Product name={products[2].name} model={products[2].model} release={products[2].release} color={products[2].color} price={products[2].price} availability={products[2].availability} ></Product>
        <Product name={products[3].name} model={products[3].model} release={products[3].release} color={products[3].color} price={products[3].price} availability={products[3].availability}></Product>
        <Product name={products[4].name} model={products[4].model} release={products[4].release} color={products[4].color} price={products[4].price} availability={products[4].availability}></Product>
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
// Object Data component

function EmplopeesData(props) {
  const dataStyle = {
    color: 'black',
    backgroundColor: 'lightgrey',
    width: '50%',
    border: '3px solid black',
    borderRadius: '5px',
    margin: '3px'
  }
  return (
    <div style={dataStyle}>
      <h1 style={{ fontSize: '26px' }}>Name : {props.name}</h1>
      <h2 style={{ fontSize: '16px' }}>Job : {props.job}</h2>
      <h3>Salary : {props.salary}</h3>
      <h4>City : {props.city}</h4>
      <h5>Country : {props.country}</h5>
      <h6>Experience : {props.experience}</h6>
    </div>
  )
}
// product data Component
function Product(props) {
  const productStyle = {
    margin:'5px',
    color: 'black',
    backgroundColor: 'grey',
    border: '1px solid grey',
    borderRadius: '5px',
    height: 'auto',
    width: '250px',
    float:'left'
  }
  return (
    <div style={productStyle}>
      <h1>{props.name}</h1>
      <h2>{props.model}</h2>
      <h3>{props.release}</h3>
      <h4>{props.color}</h4>
      <h5>{props.price}</h5>
      <h6>{props.availability}</h6>
      <button>Buy Now</button>
    </div> 
  )
}
export default App;
