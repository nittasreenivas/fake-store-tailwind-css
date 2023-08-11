
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import SingleProduct from './components/SingleProduct';
function App() {

  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id" element={<SingleProduct/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
