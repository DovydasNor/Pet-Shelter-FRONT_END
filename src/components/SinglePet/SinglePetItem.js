import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSinglePet } from './singlePetContext'
import { getSinglePet } from '../../actions/singlePetActions'

const SinglePetItem = () => {
  const { state, dispatch } = useSinglePet()
  const { id } = useParams()

  useEffect(() => {
    getSinglePet(dispatch, id)
  }, [dispatch, id])

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
      <Link to={`/pets/${id}/edit`}>Edit</Link>
    </div>
  )
}

export default SinglePetItem