import React, { useEffect } from 'react'
import { useForm } from './formContext'
import { createPet, updatePet, setField, resetForm } from '../../actions/formActions'
import { getSinglePet } from '../../actions/singlePetActions'
import { useNavigate, useParams } from 'react-router-dom'

const FormItem = () => {
  const { state, dispatch } = useForm()
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      console.log('Fetching pet data for id:', id)
      getSinglePet(dispatch, id)
    } else {
      console.log('Resetting form')
      resetForm(dispatch)
    }
  }, [dispatch, id])

  useEffect(() => {
    if (state.pet && id) {
      console.log('Setting form fields with pet data:', state.pet)
      setField(dispatch, 'type', state.pet.type)
      setField(dispatch, 'name', state.pet.name)
      setField(dispatch, 'breed', state.pet.breed)
      setField(dispatch, 'description', state.pet.description)
    }
  }, [state.pet, dispatch, id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const pet = { type: state.type, name: state.name, breed: state.breed, description: state.description }
    console.log('Submitting form with pet data:', pet)
    if (id) {
      await updatePet(dispatch, { ...pet, id })
    } else {
      await createPet(dispatch, pet)
    }
    resetForm(dispatch)
    navigate('/pets')
  }

  const handleChange = (e) => {
    console.log('Changing field:', e.target.name, 'to', e.target.value)
    setField(dispatch, e.target.name, e.target.value)
  }

  if (state.loading) {
    return <div>Loading...</div>
  }

  if (state.error) {
    return <div>Error: {state.error}</div>
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
        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          id="breed"
          name="breed"
          value={state.breed}
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
      <button type="submit">{id ? 'Update' : 'Create'}</button>
    </form>
  )
}

export default FormItem