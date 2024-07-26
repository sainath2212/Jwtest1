import './App.css'
import { Blog } from './Components/Blog'
import { Deal } from './Components/Deal'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { Newarrival } from './Components/Newarrival'
import { Products } from './Components/Products'

function App() {
  
  return (
   <>
  <Header/>
  <Home/>
  <Newarrival/>
  <Products/>
  <Deal/>
  <Blog/>
  <Footer/>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"></script>

   </>
  )
}

export default App
