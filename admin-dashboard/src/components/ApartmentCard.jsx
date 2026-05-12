function ApartmentCard({ apartment, deleteApartment }) {
  return (
    <div className="card">
      <h3>{apartment.title}</h3>

      <p>City: {apartment.city}</p>

      <p>Price: {apartment.price} €</p>

      <p>
        Status:
        {apartment.available ? " ✅ Available" : " ❌ Unavailable"}
      </p>

      <button onClick={() => deleteApartment(apartment.id)}>
        Delete
      </button>
    </div>
  )
}

export default ApartmentCard