import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Projects from './components/Projects.js'
import Home from './components/Home.js'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
   <>
   <Header/>
  
   <Routes>
    <Route path='/' element= {<Home/>} />
    <Route path='/about' element= {<About/> }/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/projects' element={<Projects/>}/>
   </Routes>
   <Footer/>
   </>
  );
}

export default App;
