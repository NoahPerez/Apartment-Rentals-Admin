import { Link } from "react-router-dom"

function ApartmentCard(props) {
  const apartment = props.apartment
  const deleteApartment = props.deleteApartment

  return (
    <div className="card">
      <img
        className="picture-size"
        src={apartment.picture_url}
        alt={apartment.name}
      />

      <div className="card-content">
        <h3 className="truncate">{apartment.name}</h3>

        <div className="card-info">
          <span>
            <strong>City</strong> {apartment.neighbourhood}
          </span>
          <strong>{apartment.price}</strong>
        </div>

        <p className="status">
          {apartment.has_availability ? "✅ Available" : "❌ Unavailable"}
        </p>

        <div className="card-buttons">
          <Link to={`/apartments/${apartment.id}`}>Details</Link>

          <button onClick={() => deleteApartment(apartment.id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ApartmentCard
