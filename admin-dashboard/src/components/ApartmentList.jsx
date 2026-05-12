import ApartmentCard from "./ApartmentCard"

function ApartmentList({ apartments, deleteApartment }) {
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