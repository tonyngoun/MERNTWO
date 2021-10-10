import PersonCard from "./components/PersonCard";
import './App.css';

const peopleArr = [
  {
    firstName: "Mason",
    lastName: "Mace",
    age: 3,
    hairColor: "brown",
  },
  {
    firstName: "Happy",
    lastName: "Grate",
    age: 25,
    hairColor: "black",
  },
  {
    firstName: "Tofu",
    lastName: "Kit",
    age: 10,
    hairColor: "white",
  },
];

function App() {
  return (
    <div className="App">
    {peopleArr.map((personObj,index) =>
    <PersonCard
    key={index}
    firstName={personObj.firstName}
    lastName={personObj.lastName}
    age={personObj.age}
    hairColor={personObj.hairColor}/>
    )}
    </div>
  );
}

export default App;
