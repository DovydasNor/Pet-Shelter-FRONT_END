import React, { useEffect } from 'react'
import { useVolunteersList } from './VolunteersListContext'
import { getVolunteers } from '../../actions/volunteersListActions'
import { Link } from 'react-router-dom'
import { Card, CardContent, Typography } from '@mui/material'
import './VolunteersListItem.scss'

const VolunteerItem = ({ volunteer }) => {
  return (
    <Card className="volunteer-card">
      <CardContent>
        <Typography variant="h5" component="h2">
          <Link to={`/volunteers/${volunteer._id}`} className="volunteer-link">
            {volunteer.name}
          </Link>
        </Typography>
      </CardContent>
    </Card>
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

  if (!state.volunteers.length) {
    return <h1>No volunteers found..</h1>
  }

  if (state.error) {
    return <div>Error: {state.error}</div>
  }

  return (
    <div className="volunteers-list-page">
      <h1>Volunteers List</h1>
      <div className="volunteers-list">
        {state.volunteers.map((volunteer) => (
          <VolunteerItem key={volunteer._id} volunteer={volunteer} />
        ))}
      </div>
    </div>
  )
}

export default VolunteersListItem