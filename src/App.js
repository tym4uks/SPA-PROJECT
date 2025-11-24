import './App.css';
import Products from './pages/products';
import { Routes, Route } from 'react-router-dom';
import CardPage from './pages/cardPage';

function App() {
  return (
   <Routes>
      <Route path="/products">
        <Route index element={<Products/>} /> 
        <Route path=":id" element={<CardPage />} /> 
      </Route>
    </Routes>
  );
}


export default App;
