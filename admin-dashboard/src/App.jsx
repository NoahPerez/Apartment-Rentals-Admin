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

  // Function to handle adding a brand new apartment to our state
  function addApartment(newApartment) {
    // We use the functional form of setApartments (passing a callback)
    // 'prev' represents the most current array of apartments before this update
    setApartments(prev => {
      // We need to generate a unique ID for the new apartment.
      // reduce() loops through all existing apartments to find the highest ID number.
      const nextId = prev.reduce(
        // Math.max compares the current highest ID (maxId) with the current apartment's ID.
        // We use Number() to ensure it's treated as a number, and || 0 as a fallback if it's missing.
        (maxId, apartment) => Math.max(maxId, Number(apartment.id) || 0),
        0 // 0 is the starting value for maxId
      ) + 1 // Add 1 to the highest found ID to ensure it's unique

      // Return a new array. We spread the newApartment object and attach our generated nextId.
      // Then we spread all existing apartments (...prev) so the new one appears at the top of the list.
      return [{ ...newApartment, id: nextId }, ...prev]
    })
  }

  // Function to handle editing an existing apartment
  function updateApartment(updatedApartment) {
    // Again, use the functional update to get the latest state
    setApartments(prev =>
      // map() creates a brand new array by looping over every item in the current state
      prev.map(apartment =>
        // Check if the current apartment in the loop matches the ID of the one we just edited
        apartment.id === updatedApartment.id 
          ? updatedApartment // If it's a match, replace the old object with the newly updated object
          : apartment        // If it's not a match, leave the existing apartment object exactly as it is
      )
    )
  }

  // Function to delete an apartment by its ID
  function deleteApartment(id) {
    // const filteredApartments = apartments.filter(apartment => {
    //   return apartment.id !== id
    // })
    // setApartments(filteredApartments)
    // Filter out the apartment that matches the given ID and return a new array
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
