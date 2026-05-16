import { Link, useParams } from "react-router-dom"

function ApartmentDetailsPage(props) {
  const { apartmentId } = useParams()

  const apartmentFound = props.apartments.find((apartment) => {
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
      <h2>{apartmentFound.title}</h2>

      <p>ID: {apartmentFound.id}</p>
      <p>City: {apartmentFound.city}</p>
      <p>Price: {apartmentFound.price} €</p>
      <p>
        Status: {apartmentFound.available ? "✅ Available" : "❌ Unavailable"}
      </p>

      <Link to="/">Back to Dashboard</Link>
    </div>
  )
}

export default ApartmentDetailsPage
