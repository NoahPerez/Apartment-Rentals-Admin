// Imports the ApartmentCard component so we can render one card per apartment
import ApartmentCard from "./ApartmentCard"

// Defines a React component that receives props:
// - apartments: can be an array OR an object like { result: [...] }
// - deleteApartment: a function passed from the parent to delete an apartment
function ApartmentList({ apartments, deleteApartment }) {
  // Normalize the data into an array called "list" so we can safely do list.map(...)
  // If apartments is already an array -> use it directly
  // Otherwise, try to use apartments.result (safe access with ?.); if missing, use []
  const list = Array.isArray(apartments)
    ? apartments
    : (apartments?.result ?? [])

  // If the array is empty, render a message and stop rendering the list
  if (list.length === 0) return <p>No apartments available.</p>

  // Render the list of apartments
  return (
    <div className="apartments-grid">
      {/* Loop over the array and render one ApartmentCard per apartment */}
      {list.map(apartment => (
        <ApartmentCard
          // key helps React identify each list item uniquely (must be stable + unique)
          key={apartment.id}
          // Pass the apartment object down to the ApartmentCard component
          apartment={apartment}
          // Pass the delete function down so the card can call it when needed
          deleteApartment={deleteApartment}
        />
      ))}
    </div>
  )
}

// Exports this component so other files can import and use <ApartmentList />
export default ApartmentList
