import React, { useEffect } from 'react'
import { useVolunteersList } from './VolunteersListContext'
import { getVolunteers } from '../../actions/volunteersListActions'
import { Link } from 'react-router-dom'

const VolunteerItem = ({ volunteer }) => {
  return (
    <li>
      <Link to={`/volunteers/${volunteer._id}`}>{volunteer.name}</Link>
    </li>
  )
}

const VolunteersListItem = () => {
  const { state, dispatch } = useVolunteersList()

  useEffect(() => {
    getVolunteers(dispatch)
  }, [dispatch])

  if (state.loading) {
    return <div>Loading...</div>
  }

  if (state.error) {
    return <div>Error: {state.error}</div>
  }

  return (
    <div>
      <h1>Volunteers List</h1>
      <ul>
        {state.volunteers.map((volunteer) => (
          <VolunteerItem key={volunteer._id} volunteer={volunteer} />
        ))}
      </ul>
    </div>
  )
}

export default VolunteersListItem