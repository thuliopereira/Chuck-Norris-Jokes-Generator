import './App.css';
import Joke from './Components/Joke';
import Navbar from './Components/Navbar';
import getPiadas from './Api';


function App() {


  

  return (
    <div className="App">
      <Navbar />
      <Joke
           value={getPiadas.value}
           id={getPiadas.id}
      />
    </div>
  );
}

export default App;
