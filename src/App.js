import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ChildrenDisplay from './components/ChildrenDisplay';

function App() {
  return (
    <div className="App">

      <header>

      <Navbar />

      </header>

      <main>

        <ChildrenDisplay />


      </main>



      
    </div>
  );
}

export default App;
