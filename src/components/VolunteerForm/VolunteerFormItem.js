import React, { useEffect } from 'react'
import { useVolunteerForm } from './VolunteerFormContext'
import { createVolunteer, updateVolunteer, setField, resetForm } from '../../actions/volunteersFormActions'
import { getSingleVolunteer } from '../../actions/singleVolunteerActions'
import { useNavigate, useParams } from 'react-router-dom'

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
    }
  }, [state.volunteer, dispatch, id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const volunteer = { name: state.name, email: state.email }
    if (id) {
      await updateVolunteer(dispatch, { ...volunteer, id })
    } else {
      await createVolunteer(dispatch, volunteer)
    }
    resetForm(dispatch)
    navigate('/volunteers')
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">{id ? 'Update Volunteer' : 'Add Volunteer'}</button>
    </form>
  )
}

export default VolunteerFormItem