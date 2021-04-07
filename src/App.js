import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let emplopees = ['Dan', 'Sammy', 'Rony', ' Kevin', 'Nick', 'Jorge', 'Mike', 'Dazy', 'kathy', "Harry"];
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
  // const secondPerson = {
  //   name: "Elizabeth",
  //   Job: "Nurse",
  //   Status: "Married",
  //   salary: "$1400"
  // }
  // var newStyle = {
  //   color: "black",
  //   backgroundColor: 'yellow',
  //   fontFamily: 'courier',
  //   fontSize: '30px',
  //   fontWeight: 'bold'
  // }
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
  // const employeesAllName = dataList.map(employeeName => employeeName.name);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Core Concepts
        </p>
        
        <Counter></Counter>
        <Users></Users>

        <ul>
          {
            emplopees.map(employee => <li>{employee}</li>)
          }
        </ul>
        <div>
          <ul>
            {
              products.map(product => <li>{product.name}</li>)
            }
          </ul>
        </div>
        {/* <h1 style={newStyle}>{secondPerson.name + "," + " " + "Job: " + secondPerson.Job + "," + " " + "Salary:" + secondPerson.salary}</h1> */}
        <h1>this is a heading typed in react application</h1>
        <h2 style={{ color: "black", backgroundColor: 'yellow', fontFamily: 'courier', fontSize: '30px', fontWeight: 'bold' }}> {person.name}: {(2 + 5) * 25 + 65} </h2>
        <h3>{person.Job}</h3>
        <h4>{person.Status}</h4>

      </header>
      <main>
        {/* different way to explain 134-136 line */}
        {/* <PersonOne name="Rubel" job="Senior Executive" salary="$700"></PersonOne>
        <PersonOne name="Daniel" job="Developer" salary="$1400"></PersonOne>
        <PersonOne name={emplopees[0]}></PersonOne> */}

        {/* different way to explain 140-136 line */}
        <div style={{ display: 'flex' }}>
          {/* <EmplopeesData name={dataList[0].name} job={dataList[0].job} salary={dataList[0].salary} city={dataList[0].city} country={dataList[0].country} experience={dataList[0].experience}></EmplopeesData>
          <EmplopeesData name={dataList[1].name} job={dataList[1].job} salary={dataList[1].salary} city={dataList[1].city} country={dataList[1].country} experience={dataList[1].experience}></EmplopeesData>
          <EmplopeesData name={dataList[2].name} job={dataList[2].job} salary={dataList[2].salary} city={dataList[2].city} country={dataList[2].country} experience={dataList[2].experience}></EmplopeesData>
          <EmplopeesData name={dataList[3].name} job={dataList[3].job} salary={dataList[3].salary} city={dataList[3].city} country={dataList[3].country} experience={dataList[3].experience}></EmplopeesData> */}


          {
            dataList.map(emp => <EmplopeesData newShortcut={emp}></EmplopeesData>)
          }
        </div>


        <div>
          {/* different way to explain 155-159 line */}

          {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product>
        <Product product={products[4]}></Product> */}


          {
            products.map(pd => <Product product={pd}></Product>)
          }

        </div>

      </main>
    </div>
  );
}

// function PersonOne(props) {
//   const personOneStyle = {
//     backgroundColor: 'pink',
//     fontFamily: 'cursive'
//   }
//   const salary = {
//     color: 'white',
//     backgroundColor: '#2225ff',
//     fontSize: '25px',
//     fontWeight: 'bolder',
//     borderRadius: '5px',
//     border: '5px solid red'
//   }
//   return (
//     <div >
//       <h1 style={personOneStyle}>Name :{props.name}</h1>
//       <h2>Job : {props.job}</h2>
//       <p style={salary}>Salary : {props.salary}</p>
//     </div>
//   )
// }
// EmplopeesData object component start

function EmplopeesData(props) {
  const dataStyle = {
    margin: '3px',
    color: 'black',
    backgroundColor: 'lightgrey',
    width: '250px',
    height: 'auto',
    border: '3px solid black',
    borderRadius: '5px',
    float: 'left'

  }
  const { name, job, salary, city, country, experience } = props.newShortcut;
  console.log("checking porps", props)
  return (
    <div style={dataStyle}>
      <h1 style={{ fontSize: '26px' }}>Name : {name}</h1>
      <h2 style={{ fontSize: '16px' }}>Job : {job}</h2>
      <h3>Salary : {salary}</h3>
      <h4>City : {city}</h4>
      <h5>Country : {country}</h5>
      <h6>Experience : {experience}</h6>
    </div>
  )
}
// EmplopeesData object component end


// counter start
function Counter() {
  const buttonStyle = {
    color: 'red',
    backgroundColor: 'black',
    fontFamily: 'cursive',
    fontSize: '18px',
    fontWeight: '14px'
  }

  const [count, setCount] = useState(0);
  // const handleIncrease = () => setCount  (count + 1);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>Decrease</button>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
// counter end
// users Component start 

// users Component end 
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data=> setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic User :{users.length}</h3>
      <ul>
        {
          users.map(user => <h5>{user.name}</h5>)
        }
{
  users.map(user=> <h3>Street : {user.address.street}</h3>)
}
        {
          console.log(users)
        }
      </ul>
    </div>
  )
}



// product data Component start
function Product(props) {
  const productStyle = {
    margin: '5px',
    color: 'black',
    backgroundColor: 'grey',
    border: '1px solid grey',
    borderRadius: '5px',
    height: 'auto',
    width: '250px',
    float: 'left'
  }
  const { name, model, release, color, price, availability } = props.product;
  return (
    <div style={productStyle}>
      <h1>{name}</h1>
      <h2>{model}</h2>
      <h3>{release}</h3>
      <h4>{color}</h4>
      <h5>{price}</h5>
      <h6>{availability}</h6>
      <button>Buy Now</button>
    </div>
  )
}
// product data Component end



// 
export default App;
