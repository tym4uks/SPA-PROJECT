import './App.css';
import Products from './pages/products';
import { Routes, Route } from 'react-router-dom';
import CardPage from './pages/cardPage';
import CreateCard from './pages/createCard';

function App() {
  return (
   <Routes>
      <Route path="/products">
        <Route index element={<Products/>} /> 
        <Route path=":id" element={<CardPage />} /> 
      </Route>
      <Route path="/create-product" element={<CreateCard/>} /> 
    </Routes>
  );
}


export default App;
