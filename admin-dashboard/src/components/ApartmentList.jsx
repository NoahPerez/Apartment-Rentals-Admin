import ApartmentCard from "./ApartmentCard"

function ApartmentList({ apartments, deleteApartment }) {
  if (apartments.length === 0) {
    return <p>No apartments available.</p>
  }

  return (
    <div>
      {apartments.map((apartment) => (
        <ApartmentCard
          key={apartment.id}
          apartment={apartment}
          deleteApartment={deleteApartment}
        />
      ))}
    </div>
  )
}

export default ApartmentList
