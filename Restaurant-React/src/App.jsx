import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Reserve from './Components/Reserve/Reserve'
import Header from './Components/Header/Header'
import Menu from './Components/Menu/Menu'
function App() {


  return (
    
      <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/menu" element={<Menu />} />
           
          </Routes>
      </Router>
       
     
     
  )
}

export default App
