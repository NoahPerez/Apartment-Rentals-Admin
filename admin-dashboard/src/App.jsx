import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import DashboardPage from "./pages/DashboardPage"
import AboutPage from "./pages/AboutPage"
import ApartmentDetailsPage from "./pages/ApartmentDetailsPage"
import NotFoundPage from "./pages/NotFoundPage"
import apartmentsData from "./data/apartments.json"
import "./index.css"

function App() {
  const [apartments, setApartments] = useState(apartmentsData)

  function deleteApartment(id) {
    const filteredApartments = apartments.filter((apartment) => {
      return apartment.id !== id
    })

    setApartments(filteredApartments)
  }

  return (
    <div className="app-container">
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <main className="page-content">
          <Routes>
            <Route
              path="/"
              element={
                <DashboardPage
                  apartments={apartments}
                  deleteApartment={deleteApartment}
                />
              }
            />

            <Route path="/about" element={<AboutPage />} />

            <Route
              path="/apartments/:apartmentId"
              element={<ApartmentDetailsPage apartments={apartments} />}
            />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default App
