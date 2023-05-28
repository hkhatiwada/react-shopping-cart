import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        
          <Route path="/" exact element={<Home />}/>
          
          <Route path="/cart" exact element={<Cart />}/>
            
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
