import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import Dresses from './components/Dresses.jsx'
import Header from './components/Header.jsx'
import Secondheader from './components/Secondheader.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login.jsx'
import Orders from './components/Orders.jsx'
import Croptop from './components/Croptop.jsx'
import Bottamwear from './components/Bottamwear.jsx'
import Jumpsuit from './components/Jumpsuit.jsx'
import Bags from './components/Bags.jsx'
import Heels from './components/Heels.jsx'
import Shoes from './components/Shoes.jsx'
import Slipers from './components/Slipers.jsx'
import Hairaccessories from './components/Hairaccessories.jsx'
import NeckpiecesEaring from './components/NeckpiecesEaring.jsx'
import Handaccessories from './components/Handaccessories.jsx'
import Wintercollection from './components/Wintercollection.jsx'
import Leathercollection from './components/Leathercollection.jsx'
import { CartProvider } from "./context/CartContext";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Secondheader />
          <Nav />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/dresses' element={<Dresses />} />
            <Route path='/croptop' element={<Croptop />} />
            <Route path='/bottamwear' element={<Bottamwear />} />
            <Route path='/jumpsuit' element={<Jumpsuit />} />
            <Route path='/bags' element={<Bags />} />
            <Route path='/heels' element={<Heels />} />
            <Route path='/shoes' element={<Shoes />} />
            <Route path='/slipers' element={<Slipers />} />
            <Route path='/hairaccessories' element={<Hairaccessories />} />
            <Route path='/neckpiecesEaring' element={<NeckpiecesEaring />} />
            <Route path='/handaccessories' element={<Handaccessories />} />
            <Route path='/wintercollection' element={<Wintercollection />} />
            <Route path='/leathercollection' element={<Leathercollection />} />
            <Route path='/orders' element={<Orders />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
           
          </Routes>
          <Footer />
        </CartProvider>
        </BrowserRouter>

    </>
  )
}

export default App