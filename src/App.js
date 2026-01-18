import './App.css';
import Products from './pages/products';
import { Routes, Route } from 'react-router-dom';
import Basket from './pages/basket';

function App() {
  return (
   <Routes>
      <Route path="*">
        <Route index element={<Products/>} /> 
      </Route>
      <Route path="/basket" element={<Basket/>} /> 
    </Routes>
  );
}


export default App;
