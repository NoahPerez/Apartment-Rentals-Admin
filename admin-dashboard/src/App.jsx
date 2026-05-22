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
  const [apartments, setApartments] = useState(apartmentsData.result)

  function addApartment(newApartment) {
    setApartments(prev => {
      const nextId = prev.reduce(
        (maxId, apartment) => Math.max(maxId, Number(apartment.id) || 0),
        0
      ) + 1

      return [{ ...newApartment, id: nextId }, ...prev]
    })
  }

  function updateApartment(updatedApartment) {
    setApartments(prev =>
      prev.map(apartment =>
        apartment.id === updatedApartment.id ? updatedApartment : apartment
      )
    )
  }

  function deleteApartment(id) {
    // const filteredApartments = apartments.filter(apartment => {
    //   return apartment.id !== id
    // })
    // setApartments(filteredApartments)
    setApartments(prev => prev.filter(item => item.id !== id))
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
                  addApartment={addApartment}
                  deleteApartment={deleteApartment}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/apartments/:apartmentId"
              element={
                <ApartmentDetailsPage
                  apartments={apartments}
                  updateApartment={updateApartment}
                />
              }
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
