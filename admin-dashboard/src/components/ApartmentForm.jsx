import { useState } from "react"

function getInitialFormData(initialData = {}) {
  return {
    name: initialData.name ?? "",
    neighbourhood: initialData.neighbourhood ?? "",
    price: initialData.price ?? "",
    picture_url: initialData.picture_url ?? "",
    has_availability: Boolean(initialData.has_availability),
  }
}

function ApartmentForm({
  initialData,
  onSubmit,
  submitLabel = "Save apartment",
  resetOnSubmit = false,
}) {
  const [formData, setFormData] = useState(() => getInitialFormData(initialData))

  function handleChange(event) {
    const { name, value, type, checked } = event.target

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const apartmentData = {
      ...initialData,
      name: formData.name.trim(),
      neighbourhood: formData.neighbourhood.trim(),
      price: formData.price.trim(),
      picture_url: formData.picture_url.trim(),
      has_availability: formData.has_availability,
    }

    onSubmit(apartmentData)

    if (resetOnSubmit) {
      setFormData(getInitialFormData())
    }
  }

  return (
    <form className="apartment-form" onSubmit={handleSubmit}>
      <h3 className="form-title">{submitLabel}</h3>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="e.g. Cozy Studio in Malasaña"
        />
      </div>

      <div className="form-group">
        <label htmlFor="neighbourhood">Neighbourhood</label>
        <input
          id="neighbourhood"
          name="neighbourhood"
          type="text"
          value={formData.neighbourhood}
          onChange={handleChange}
          placeholder="e.g. Madrid, Spain"
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="text"
          value={formData.price}
          onChange={handleChange}
          placeholder="e.g. $120.00"
        />
      </div>

      <div className="form-group">
        <label htmlFor="picture_url">Image URL</label>
        <input
          id="picture_url"
          name="picture_url"
          type="url"
          value={formData.picture_url}
          onChange={handleChange}
          required
          placeholder="https://..."
        />
      </div>

      <div className="form-group checkbox-group">
        <input
          id="has_availability"
          name="has_availability"
          type="checkbox"
          checked={formData.has_availability}
          onChange={handleChange}
        />
        <label htmlFor="has_availability">Available</label>
      </div>

      <button className="submit-btn" type="submit">
        {submitLabel}
      </button>
    </form>
  )
}

export default ApartmentForm