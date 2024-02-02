import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Shop from './Pages/Shop';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/men' element={<ShopCategory category="men"/>}></Route>
        <Route path='/women' element={<ShopCategory category="women"/>}></Route>
        <Route path='/kids' element={<ShopCategory category="kids"/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
          <Route path=':productId' element={<Product/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignup/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
