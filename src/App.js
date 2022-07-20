import React, {useState} from 'react';
import Header from './components/Header';
import Buttons from './components/Buttons';
import { got } from './components/data';
import Card from './components/Card';

function App() {

const[houses,setHouses] = useState(got.houses)
const[people,setPeople] = useState(null)
const[active, setActive] = useState(null)
const handleClick = (houseName) => {
  let filterPeople = houses.filter((houses) => (houses.name === houseName ? houses : null))
  setPeople({people:filterPeople[0].people})
  setActive(houseName)
};
if (active === null) {
  handleClick(houses[0].name);
}

  return (
    <div>
      <Header/>
      <Buttons house={houses} handleClick={handleClick} active={active}/>
      <Card people={people}/>
    </div>
  );
}

export default App;
