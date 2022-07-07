
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from "./Home"
import Register from './Register';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from './Login';
import Slider from './Slider';
import Poducts from './Poducts';



function App() {
  return (
    <div className="pp">
      {/* <Slider_new/> */}
  
                <ToastContainer closeButton={false}  position="top-right" />
                <Routes>
                <Route path = "/" element={<Register/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Products'element={<Poducts/>}/>

                </Routes>
   
    </div>
  );
}

export default App;
