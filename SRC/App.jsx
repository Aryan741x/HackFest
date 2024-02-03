
import Registerform from "./pages/register"
import LoginForm from "./pages/login"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import "./styles.css"
import Home from "./pages/home"




function App()
{
  return (<BrowserRouter>
  <Routes>
  <Route path="/">
    <Route path="/" element={<Registerform/>}></Route>
    <Route path= "login"element={<LoginForm/>}></Route>
    <Route path= "home" element={<Home/>}></Route>
   
  </Route>


  </Routes>
  
  
  
  </BrowserRouter>)
}

export default App
