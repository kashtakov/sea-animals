import { animals } from './animals';
import logo from './logo.svg';
import './App.css';
import ocean from './images/ocean.jpg';


const title = ''; 
const background = <img         className='background'
alt='ocean'
src={ocean}
/>;

const showBackground = true;
const images = [];
for(const animal in animals){
  images.push(<img 
    key={animal}
    className='animal'
    alt={animal}
    src={animals[animal].image}
    ariaLabel={animal}
    role='button'
    onClick={displayFact}
  
  />);
}

function displayFact(e){
 
  const name = e.target.alt;
  const animalInfo = animals[name];
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
  const funFact = animalInfo.facts[optionIndex];
  document.getElementById('fact').innerHTML=funFact;
  document.getElementById('title').innerHTML=name;
 
}

function App() {
  return (
    <div>
    <h1 id="title">{title==='' ? 'Click an animal for a fun fact': title}</h1>{showBackground &&background}<div className='animals'>{images}</div><p id='fact'></p>
    </div>
  );
}

export default App;
