import { Link, useParams } from "react-router-dom"
import ApartmentForm from "../components/ApartmentForm"

function ApartmentDetailsPage(props) {
  const { apartmentId } = useParams()

  const apartmentFound = props.apartments.find(apartment => {
    return apartment.id === Number(apartmentId)
  })

  if (!apartmentFound) {
    return (
      <div>
        <h2>Apartment not found</h2>
        <Link to="/">Back to Dashboard</Link>
      </div>
    )
  }

  return (
    <div>
      <h2>{apartmentFound.name}</h2>
      <img
        className="picture-size"
        src={apartmentFound.picture_url}
        alt={apartmentFound.name}
      />
      <p>ID: {apartmentFound.id}</p>
      <p>Location: {apartmentFound.neighbourhood || "Unknown"}</p>
      <p>Price: {apartmentFound.price || "N/A"}</p>
      <p>
        Status:{" "}
        {apartmentFound.has_availability ? "✅ Available" : "❌ Unavailable"}
      </p>

      <ApartmentForm
        key={apartmentFound.id}
        initialData={apartmentFound}
        onSubmit={props.updateApartment}
        submitLabel="Update apartment"
      />

      <div className="card-buttons">
        <Link to="/">
          <button>Back to Dashboard</button>
        </Link>
      </div>
    </div>
  )
}

export default ApartmentDetailsPage
