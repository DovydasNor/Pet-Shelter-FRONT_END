import React, { useEffect } from 'react'
import { useSinglePet } from './singlePetContext'
import { getSinglePet, deletePet } from '../../actions/singlePetActions'
import { useParams, useNavigate, Link } from 'react-router-dom'
import CommentingItem from '../commenting/commentingItem'
import CommentingForm from '../commenting/commentingForm'
import { CommentingProvider } from '../commenting/commentingContext'

const SinglePetPage = () => {
  const { state, dispatch } = useSinglePet()
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

  return (
    <div>
      <h1>{state.pet.name}</h1>
      <p>Type: {state.pet.type}</p>
      <p>Breed: {state.pet.breed}</p>
      <p>Description: {state.pet.description}</p>
      <Link to={`/pets/${id}/edit`}>Edit</Link> <button onClick={deleteButtonHandler}>Delete</button>

      <CommentingProvider>
        <CommentingItem petId={id} />
        <CommentingForm petId={id} />
      </CommentingProvider>
    </div>
  )
}

export default SinglePetPage