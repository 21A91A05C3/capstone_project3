import Home from './home';    
import About from './about';    
import Contact from './contact';    
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './menu';
import Feedback from './feedback';
function Main(){
    return(
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/feedback" element={<Feedback/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default  Main;