import './App.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Routes, Route } from "react-router-dom"
import { Home } from './Pages/Home/home';
import { Dashboard } from './Pages/Dashboard/Dashboard';
import { Settings } from './Pages/Settings/Settings';
import { HotDishes } from './Pages/HotDishes/HotDishes';
import { ColdDishes } from './Pages/ColdDishes/ColdDishes';
import { Soup } from './Pages/Soup/Soup';
import { Grill } from './Pages/Grill/Grill';
import { Appetizer } from './Pages/Appetizer/Appetizer';
import { Dessert } from './Pages/Dessert/Dessert';
import { Products } from './Pages/Settings/Products/Products';
import { ProductHotDishes } from './Pages/Settings/Products/ProductHotDishes/ProductHotDishes';
import { ProductColdDishes } from './Pages/Settings/Products/ProductColdDishes/ProductColdDishes';
import { ProductSoup } from './Pages/Settings/Products/ProductSoup/ProductSoup';
import { ProductGrill } from './Pages/Settings/Products/Grill/ProductGrill';
import { ProductAppetizer } from './Pages/Settings/Products/ProductAppetizer/ProductAppetizer';
import { ProductDessert } from './Pages/Settings/Products/Dessert/ProductDessert';

function App() {
  return (
    <div className="App">
      <div className='row'>
        <Sidebar />
        <div className='col-7 grid'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='hug' element={<h1 className='text-white'>Comming soon😥</h1>} />
            {/* PAGES ROUTE */}
            <Route path='/hot-dishes' element={<HotDishes />} />
            <Route path='/cold-dishes' element={<ColdDishes />} />
            <Route path='/soup' element={<Soup />} />
            <Route path='/grill' element={<Grill />} />
            <Route path='/appetizer' element={<Appetizer />} />
            <Route path='/dessert' element={<Dessert />} />
            {/* PAGES ROUTE END */}
            <Route path='/products' element={<Products />} />
            <Route path='/products/hot-dishes' element={<ProductHotDishes />} />
            <Route path='/products/cold-dishes' element={<ProductColdDishes />} />
            <Route path='/products/soup' element={<ProductSoup />} />
            <Route path='/products/grill' element={<ProductGrill />} />
            <Route path='/products/appetizer' element={<ProductAppetizer />} />
            <Route path='/products/dessert' element={<ProductDessert />} />
            <Route path='*' element={<h1>Comming soon😥</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
