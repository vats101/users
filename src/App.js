
import './App.css';
import Home from './Pages/Home';
import {Routes,Route} from 'react-router-dom'; 
import SingleUser from './Pages/SingleUser';

function App() {
  return (
    <>  
    <div className="App">
     
       <Routes>
          <Route path="/" exact element={<Home></Home>}></Route>
          <Route path="/singleuser/:id" element={<SingleUser></SingleUser>}></Route>
       </Routes>
    </div>
    </>
  );
}

export default App;
