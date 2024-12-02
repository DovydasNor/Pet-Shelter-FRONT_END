import React, { useEffect } from 'react'
import { useSingleVolunteer } from './SingleVolunteerContext'
import { deleteVolunteer, getSingleVolunteer } from '../../actions/singleVolunteerActions'
import { Link, useNavigate, useParams } from 'react-router-dom'

const VolunteerItem = () => {
  const { state, dispatch } = useSingleVolunteer()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getSingleVolunteer(dispatch, id)
  }, [dispatch, id])

  const deleteButtonHandler = async () => {
    await deleteVolunteer(dispatch, id)
    navigate('/volunteers')
  }

  if (state.loading) {
    return <div>Loading...</div>
  }

  if (state.error) {
    return <div>Error: {state.error}</div>
  }

  if (!state.volunteer) {
    return <div>No volunteer found</div>
  }

  return (
    <div>
      <h1>{state.volunteer.name}</h1>
      <p>Email: {state.volunteer.email}</p>
      <Link to={`/volunteer/${id}/edit`}>Edit</Link> <button onClick={deleteButtonHandler}>Delete</button>
    </div>
  )
}

export default VolunteerItem