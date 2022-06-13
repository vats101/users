
import './App.css';
import Home from './Pages/Home';
import {Routes,Route} from 'react-router-dom'; 
import SingleUser from './Pages/SingleUser';
import About from './Pages/About';
import Navbar from './components/Navbar';
function App() {
  return (
    <>  
    <Navbar/>
    <div className="App">
       <Routes>
          <Route path="/" exact element={<Home></Home>}></Route>
          <Route path="/about" exact element={<About></About>}></Route>
          <Route path="/singleuser/:id" element={<SingleUser></SingleUser>}></Route>
       </Routes>
    </div>
    </>
  );
}

export default App;
