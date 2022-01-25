import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Project from './components/pages/Project'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Container>
          <Routes>
            <Route  path='/' element={<Home/>} />
            <Route  path='/company' element={<Company/>} />
            <Route  path='/contact' element={<Contact/>} />
            <Route  path='/newproject' element={<NewProject/>} />
            <Route  path='/project/:id' element={<Project/>} />
            <Route  path='/projects' element={<Projects/>} />
          </Routes>
        </Container>
      </Router>

      <Footer/>
    </div>
  );
}

export default App;