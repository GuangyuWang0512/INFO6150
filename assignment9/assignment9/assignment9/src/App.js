import './App.css';
import{BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Jobs from './pages/job/Jobs';
import Contact from './pages/contact/Contact';

function App() {
  return (
   <Router>
    <nav>
      <Link to='/'>Home</Link>{" "}
      <Link to='/about'>About</Link>{" "}
      <Link to='/job'>Job</Link>{" "}
      <Link to='/contact'>Contact</Link>{" "}
    </nav>
       <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/job' element={<Jobs />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
       </Routes>
   </Router>
  );
}

export default App;
