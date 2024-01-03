import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Offer from "./Components/Offer"

function App() {
  

  return (
    <>
      <Header></Header> 
      <Offer></Offer>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
