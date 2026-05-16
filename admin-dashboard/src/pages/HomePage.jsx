import { useState } from "react"
import ApartmentList from "../components/ApartmentList"
import apartmentsData from "../data/apartments.json"

function HomePage() {
  const [apartments, setApartments] = useState(apartmentsData)

  function deleteApartment(apartmentId) {
    setApartments((currentApartments) =>
      currentApartments.filter((apartment) => apartment.id !== apartmentId)
    )
  }

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Apartment Rentals Admin dashboard.</p>

      <ApartmentList
        apartments={apartments}
        deleteApartment={deleteApartment}
      />
    </div>
  )
}

export default HomePage
