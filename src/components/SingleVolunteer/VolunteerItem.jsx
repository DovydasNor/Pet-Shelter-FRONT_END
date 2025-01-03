import { useEffect } from 'react'
import { useSingleVolunteer } from './SingleVolunteerContext'
import { deleteVolunteer, getSingleVolunteer } from '../../actions/singleVolunteerActions'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Card, CardContent, Typography, Button } from '@mui/material'
import './VolunteerItem.scss'
import { useLoginRegistration } from '../LoginRegisterItem/LoginRegistrationContext'

const VolunteerItem = () => {
  const { state, dispatch } = useSingleVolunteer()
  const { state: loginState } = useLoginRegistration()
  const { user } = loginState
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getSingleVolunteer(dispatch, id)
  }, [dispatch, id])

  const deleteButtonHandler = async () => {
    await deleteVolunteer(dispatch, id)
    navigate(`/volunteers`)
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

  const deleteEditButtons = () => {
    return (
      <>
          <Link to={`/volunteer/${id}/edit`}>
            <Button variant="contained" color="primary">
              Edit
            </Button>
          </Link>
          <Button variant="contained" color="secondary" onClick={deleteButtonHandler}>
            Delete
          </Button>
      </>
    )
  }

  return (
    <Card className="volunteer-card">
      <CardContent>
        <Typography variant="h4" component="h1">
          {state.volunteer.name}
        </Typography>
        <img src={state.volunteer.photo} alt={state.volunteer.name} className="volunteer-photo" />
        <Typography variant="body1" component="p">
          <strong>Email:</strong> {state.volunteer.email}
        </Typography>
        <Typography variant="body1" component="p">
          <strong>Description:</strong> {state.volunteer.description}
        </Typography>
        <div className="volunteer-actions">
          {user && user.type === 'admin' && deleteEditButtons()}
        </div>
      </CardContent>
    </Card>
  )
}

export default VolunteerItem