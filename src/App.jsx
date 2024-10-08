import React from 'react'
import Header from './components/master/Header/Header'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import PlaceOrder from './components/PlaceOrder/PlaceOrder'
import Footer from './components/master/Footer/Footer'

const App = () =>{
  return(
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='order' element={<PlaceOrder/>} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  )
}
export default App
