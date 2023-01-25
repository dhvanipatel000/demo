import './App.css';
import Homepage from './components/Homepage/Homepage';
import Navbar from "./components/Navbar/Navbar";
import Cards from './components/Cards/Cards';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Cards/>
    </div>
  );
}

export default App;
