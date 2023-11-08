import './App.css';
import Navbar from './componentes/Navbar';
import Home from './Screens/Home';
import Services from './Screens/Services';
import HowWeWork from './Screens/HowWeWork';
import Beneficts from './Screens/Benefits';
import Contact from './Screens/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>

      <main>
        <Home/>
        <Services/>
        <HowWeWork/>
        <Beneficts/>
        <Contact/>
      </main>

      <footer>
        <p>Pie de Pagina</p>
      </footer>

    </div>
  );
}

export default App;