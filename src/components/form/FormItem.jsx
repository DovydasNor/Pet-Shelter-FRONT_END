import { useEffect } from 'react'
import { useForm } from './formContext'
import { createPet, updatePet, setField, resetForm } from '../../actions/formActions'
import { getSinglePet } from '../../actions/singlePetActions'
import { useNavigate, useParams } from 'react-router-dom'
import { TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material'
import './FormItem.scss'

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
      setField(dispatch, 'petPhoto', state.pet.petPhoto)
      setField(dispatch, 'breed', state.pet.breed)
      setField(dispatch, 'description', state.pet.description)
    }
  }, [state.pet, dispatch, id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {
      type: state.type === 'addType' ? state.customType : state.type,
      name: state.name,
      breed: state.breed,
      petPhoto: state.petPhoto,
      description: state.description,
    }

    console.log('Submitting form with pet data:', formData)
    if (id) {
      await updatePet(dispatch, { ...formData, id })
    } else {
      await createPet(dispatch, formData)
    }
    resetForm(dispatch)
    navigate('/pets')
  }

  const handleChange = (e) => {
    console.log('Changing field:', e.target.name, 'to', e.target.value)
    setField(dispatch, e.target.name, e.target.value)
  }

  const handleCustomTypeChange = (e) => {
    setField(dispatch, 'customType', e.target.value)
  }

  if (state.loading) {
    return <div>Loading...</div>
  }

  if (state.error) {
    return <div>Error: {state.error}</div>
  }

  return (
    <div className="form-container">
      <h1>{id ? 'Edit Pet' : 'Add Pet'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <FormControl fullWidth>
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              labelId="type-label"
              id="type"
              name="type"
              value={state.type}
              onChange={handleChange}
              label="Type"
            >
              <MenuItem value="" disabled>Select a type</MenuItem>
              <MenuItem value="dog">Dog</MenuItem>
              <MenuItem value="cat">Cat</MenuItem>
              <MenuItem value="addType">Add type</MenuItem>
            </Select>
          </FormControl>
        </div>
        {state.type === 'addType' && (
          <div className="form-control">
            <TextField
              id="customType"
              name="customType"
              label="Custom Type"
              variant="outlined"
              value={state.customType}
              onChange={handleCustomTypeChange}
              fullWidth
            />
          </div>
        )}
        <div className="form-control">
          <TextField
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            value={state.name}
            onChange={handleChange}
            fullWidth
          />
        </div>
        <div className="form-control">
          <TextField
            id="breed"
            name="breed"
            label="Breed"
            variant="outlined"
            value={state.breed}
            onChange={handleChange}
            fullWidth
          />
        </div>
        <div className="form-control">
          <TextField
            id="petPhoto"
            name="petPhoto"
            label="Pet photo URL"
            variant="outlined"
            value={state.petPhoto}
            onChange={handleChange}
            fullWidth
          />
        </div>
        <div className="form-control">
          <TextField
            id="description"
            name="description"
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            value={state.description}
            onChange={handleChange}
            fullWidth
          />
        </div>
        <button type="submit">{id ? 'Update' : 'Create'}</button>
      </form>
    </div>
  )
}

export default FormItem