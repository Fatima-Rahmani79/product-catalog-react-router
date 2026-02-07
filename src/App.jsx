import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { ProductsLayout } from './layout/ProductsLayout'

function App() {

  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<ProductsLayout/>}>
          <Route index element={<ProductsList/>}/>
          <Route path=':id' element={<ProductDetails/>}/>
        </Route>
        
      </Routes>
    </>
  )
}

export default App
