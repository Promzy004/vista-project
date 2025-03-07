import Header from "./components/header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"


function App() {

  return (
    <div className="w-full bg-black">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
