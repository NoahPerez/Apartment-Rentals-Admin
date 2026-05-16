import ApartmentList from "../components/ApartmentList"

function DashboardPage(props) {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Here is the list of apartments.</p>

      <ApartmentList
        apartments={props.apartments}
        deleteApartment={props.deleteApartment}
      />
    </div>
  )
}

export default DashboardPage
