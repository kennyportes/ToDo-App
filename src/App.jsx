import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tasks from "./pages/Tasks";
import Contact from "./pages/Contact";
import NavBar from "./components/Navbar";

function App() {
  return(
    <>
    <BrowserRouter>
      <NavBar />

      <Routes>
        
        <Route path="/Task" element={<Tasks />} />

        
        <Route path="/Contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App;