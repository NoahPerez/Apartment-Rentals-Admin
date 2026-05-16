import { Link } from "react-router-dom"

function ApartmentCard(props) {
  const apartment = props.apartment
  const deleteApartment = props.deleteApartment

  return (
    <div className="card">
      <h3>{apartment.title}</h3>

      <p>City: {apartment.city}</p>
      <p>Price: {apartment.price} €</p>
      <p>
        Status: {apartment.available ? "✅ Available" : "❌ Unavailable"}
      </p>

      <div className="card-buttons">
        <Link to={`/apartments/${apartment.id}`}>Details</Link>

        <button onClick={() => deleteApartment(apartment.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default ApartmentCard
