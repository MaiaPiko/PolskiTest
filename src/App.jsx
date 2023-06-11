
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import ReadingTest1 from "./pages/ReadingTest1";
import Home from "./pages/Home";
import "@fontsource/poppins"; 
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/500.css";
import About from './pages/About'; 
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import ReadingTest2 from './pages/ReadingTest2';


function App() {
  // window.addEventListener('beforeunload', sessionStorage.clear());


  return (


      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/test/1" element={<ReadingTest1 />} />
          <Route path="/test/2" element={<ReadingTest2/>} />

          <Route path="*" element={<Home />} />
      
        </Route>
      </Routes>
    </BrowserRouter>

    
  )
}

export default App
