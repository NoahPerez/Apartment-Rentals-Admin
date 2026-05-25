import { useState } from "react"

function AddApartmentForm(props) {
  const [title, setTitle] = useState("")
  const [city, setCity] = useState("")
  const [price, setPrice] = useState("")
  const [available, setAvailable] = useState(true)

  function handleSubmit(event) {
    event.preventDefault()

    const newApartment = {
      id: Date.now(),
      title: title,
      city: city,
      price: Number(price),
      available: available
    }

    props.addApartment(newApartment)

    setTitle("")
    setCity("")
    setPrice("")
    setAvailable(true)
  }

  return (
    <div className="form-box">
      <h3>Add a New Apartment</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>

        <div className="form-group checkbox-group">
          <label>Available</label>
          <input
            type="checkbox"
            checked={available}
            onChange={(event) => setAvailable(event.target.checked)}
          />
        </div>

        <button type="submit">Add Apartment</button>
      </form>
    </div>
  )
}

export default AddApartmentForm
