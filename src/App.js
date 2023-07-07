import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import NavigationBar from './Components/Navigationbar';
import Feature from './Components/Feature';


function App() {

  
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/feature' element={<Feature />} />
        </Routes>
      </Router>
        
    </div>
  );
}
export default App;
