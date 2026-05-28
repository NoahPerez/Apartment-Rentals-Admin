import { Link, useParams } from "react-router-dom"
import ApartmentForm from "../components/ApartmentForm"

function ApartmentDetailsPage(props) {
  const { apartmentId } = useParams()

  const apartmentFound = props.apartments.find(apartment => {
    return apartment.id === Number(apartmentId)
  })

  if (!apartmentFound) {
    return (
      <div className="details-page">
        <div className="details-card">
          <h2>Apartment not found</h2>
          <p>The apartment you are looking for does not exist.</p>

          <div className="details-actions">
            <Link to="/" className="back-link">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="details-page">
      <div className="details-card">
        <h2 className="details-title">{apartmentFound.name}</h2>

        <img
          className="details-image"
          src={apartmentFound.picture_url}
          alt={apartmentFound.name}
        />

        <div className="details-info">
          <p>
            <strong>ID:</strong> {apartmentFound.id}
          </p>
          <p>
            <strong>Location:</strong>{" "}
            {apartmentFound.neighbourhood || "Unknown"}
          </p>
          <p>
            <strong>Price:</strong> {apartmentFound.price || "N/A"}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            {apartmentFound.has_availability
              ? "✅ Available"
              : "❌ Unavailable"}
          </p>
        </div>

        <div className="details-actions">
          <Link to="/" className="back-link">
            Back to Dashboard
          </Link>
        </div>
      </div>

      <div className="update-form-box">
        <ApartmentForm
          key={apartmentFound.id}
          initialData={apartmentFound}
          onSubmit={props.updateApartment}
          submitLabel="Update apartment"
        />
      </div>
    </div>
  )
}

export default ApartmentDetailsPage
