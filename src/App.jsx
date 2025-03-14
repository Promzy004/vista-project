import Header from "./components/header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Blogs from "./pages/blog"
import About from "./pages/about"
import Contact from "./pages/contact"



function App() {


  return (
    <div className="w-full bg-black">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
