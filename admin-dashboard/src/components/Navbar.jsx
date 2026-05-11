import logo from "../assets/logo.png"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />
        <h1>Apartment Rentals Admin</h1>
      </div>
    </nav>
  )
}

export default Navbar
