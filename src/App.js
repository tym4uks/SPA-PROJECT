import './App.css';
import Products from './pages/products';
import { Routes, Route } from 'react-router-dom';
import cardPage from './pages/cardPage';

function App() {
  return (
   <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<cardPage />} />
    </Routes>
  );
}


export default App;
