
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Reading from "./pages/Reading";
import Home from "./pages/Home";
import "@fontsource/poppins"; 
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/500.css"; 




import "@fontsource/poppins/400-italic.css"; // Specify weight and style

function App() {


  return (


      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/reading" element={<Reading />} />
          <Route path="*" element={<Home />} />
      
        </Route>
      </Routes>
    </BrowserRouter>

    
  )
}

export default App
