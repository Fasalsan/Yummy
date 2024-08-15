
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Navbar from './component/Navbar';
import Chefs from './pages/Chefs';
import Contact from './pages/Contact';
import Footer from './component/Footer';
import Headroom from 'react-headroom';

  function App() {


    return (
      <div>
        <Headroom>
          <Navbar />
        </Headroom>
        <div>
          <Home />
          <About />
          <Menu />
          <Chefs />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }

export default App;
