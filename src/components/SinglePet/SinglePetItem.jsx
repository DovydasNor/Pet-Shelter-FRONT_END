import { useEffect } from 'react'
import { useSinglePet } from './singlePetContext'
import { getSinglePet, deletePet } from '../../actions/singlePetActions'
import { useParams, useNavigate, Link } from 'react-router-dom'
import CommentingItem from '../commenting/commentingItem'
import CommentingForm from '../commenting/commentingForm'
import { CommentingProvider } from '../commenting/commentingContext'
import { Typography, Button, Card, CardContent, Container } from '@mui/material'
import './SinglePetItem.scss'
import { useLoginRegistration } from '../LoginRegisterItem/LoginRegistrationContext'

const SinglePetItem = () => {
  const { state, dispatch } = useSinglePet()
  const { state: loginState } = useLoginRegistration()
  const { user } = loginState
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getSinglePet(dispatch, id)
  }, [dispatch, id])

  const deleteButtonHandler = async () => {
    await deletePet(dispatch, id)
    navigate('/pets')
  }

  if (state.loading) {
    return <div>Loading...</div>
  }

  if (state.error) {
    return <div>Error: {state.error}</div>
  }

  if (!state.pet) {
    return <div>No pet found</div>
  }

  const deleteEditButtons = () => {
    return (
      <>
        <Link to={`/pets/${id}/edit`}>
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
    <Container className="single-pet-container" maxWidth="sm">
      <Card className="single-pet-card">
        <CardContent className="card-content">
          <img src={state.pet.petPhoto} alt={state.pet.name} className="pet-photo" />
          <div className="pet-details">
            <Typography variant="h4" component="h1" gutterBottom>
              {state.pet.name}
            </Typography>
            <Typography variant="body1" component="p" className="pet-info">
              <strong>Breed:</strong> {state.pet.breed}
            </Typography>
            <Typography variant="body1" component="p" className="pet-info">
              <strong>Description:</strong> {state.pet.description}
            </Typography>

            <div className="pet-actions">
              {user && user.type === 'admin' && deleteEditButtons()}
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="comment-section-card">
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Comments
          </Typography>
          <CommentingProvider>
            <CommentingItem petId={id} />
            <CommentingForm petId={id} />
          </CommentingProvider>
        </CardContent>
      </Card>
    </Container>
  )
}

export default SinglePetItem