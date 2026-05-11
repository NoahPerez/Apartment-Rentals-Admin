import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import "./index.css"

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default App
