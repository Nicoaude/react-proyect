"use client"

import { useState } from "react"
import "./CheckoutForm.css"

const CheckoutForm = ({ onConfirm }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    confirmEmail: "",
  })

  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    const errors = {}

    if (!formData.name.trim()) {
      errors.name = "El nombre es obligatorio"
    }

    if (!formData.phone.trim()) {
      errors.phone = "El teléfono es obligatorio"
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      errors.phone = "Ingrese un número de teléfono válido (10 dígitos)"
    }

    if (!formData.email.trim()) {
      errors.email = "El email es obligatorio"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Ingrese un email válido"
    }

    if (formData.email !== formData.confirmEmail) {
      errors.confirmEmail = "Los emails no coinciden"
    }

    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const errors = validateForm()

    if (Object.keys(errors).length === 0) {
      const userData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
      }

      onConfirm(userData)
    } else {
      setFormErrors(errors)
    }
  }

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nombre completo</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={formErrors.name ? "error" : ""}
        />
        {formErrors.name && <span className="error-message">{formErrors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Teléfono</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={formErrors.phone ? "error" : ""}
        />
        {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={formErrors.email ? "error" : ""}
        />
        {formErrors.email && <span className="error-message">{formErrors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="confirmEmail">Confirmar Email</label>
        <input
          type="email"
          id="confirmEmail"
          name="confirmEmail"
          value={formData.confirmEmail}
          onChange={handleChange}
          className={formErrors.confirmEmail ? "error" : ""}
        />
        {formErrors.confirmEmail && <span className="error-message">{formErrors.confirmEmail}</span>}
      </div>

      <button type="submit" className="btn btn-primary checkout-button">
        Finalizar compra
      </button>
    </form>
  )
}

export default CheckoutForm
