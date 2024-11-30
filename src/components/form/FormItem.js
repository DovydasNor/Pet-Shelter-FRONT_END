import React from 'react'
import { useForm } from './formContext'
import { createPet } from '../../actions/formActions.js'
import { useNavigate } from 'react-router'

const FormItem = () => {
  const { state, dispatch } = useForm()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    const pet = { type: state.type, name: state.name, bread: state.bread, description: state.description }
    await createPet(dispatch, pet)
    dispatch({ type: 'RESET_FORM' })
    navigate('/pets')
  }

  const handleChange = e => {
    dispatch({ type: 'SET_FIELD', field: e.target.name, value: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="type">Type:</label>
        <select
          name="type"
          id="type"
          value={state.type}
          onChange={handleChange}
        >
          <option value="" disabled>Select a type</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="bread">Bread:</label>
        <input
          type="text"
          id="bread"
          name="bread"
          value={state.bread}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          value={state.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default FormItem