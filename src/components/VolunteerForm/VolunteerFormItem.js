import React, { useEffect } from 'react'
import { useVolunteerForm } from './VolunteerFormContext'
import { createVolunteer, updateVolunteer, setField, resetForm } from '../../actions/volunteersFormActions'
import { getSingleVolunteer } from '../../actions/singleVolunteerActions'
import { useNavigate, useParams } from 'react-router-dom'
import { TextField } from '@mui/material'
import './VolunteerFormItem.scss'

const VolunteerFormItem = () => {
  const { state, dispatch } = useVolunteerForm()
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      getSingleVolunteer(dispatch, id)
    } else {
      resetForm(dispatch)
    }
  }, [dispatch, id])

  useEffect(() => {
    if (state.volunteer && id) {
      setField(dispatch, 'name', state.volunteer.name)
      setField(dispatch, 'email', state.volunteer.email)
      setField(dispatch, 'description', state.volunteer.description)
    }
  }, [state.volunteer, dispatch, id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const volunteer = { name: state.name, email: state.email, description: state.description }
    if (id) {
      await updateVolunteer(dispatch, { ...volunteer, id })
    } else {
      await createVolunteer(dispatch, volunteer)
    }
    resetForm(dispatch)
    navigate(`/volunteers/${id}`)
  }

  const handleChange = (e) => {
    setField(dispatch, e.target.name, e.target.value)
  }

  if (state.loading) {
    return <div>Loading...</div>
  }

  if (state.error) {
    return <div>Error: {state.error}</div>
  }

  return (
    <div className="form-container">
      <h1>{id ? 'Edit Volunteer' : 'Add Volunteer'}</h1>
      <form onSubmit={handleSubmit}>
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
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            value={state.email}
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
        <button type="submit">{id ? 'Update Volunteer' : 'Add Volunteer'}</button>
      </form>
    </div>
  )
}

export default VolunteerFormItem