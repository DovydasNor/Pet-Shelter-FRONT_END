import React, { useEffect, useState } from 'react'
import { usePetsList } from './petsListContext'
import { getAllPets } from '../../actions/petsListActions'

const PetsListPage = () => {
  const { state, dispatch } = usePetsList()
  const [filterType, setFilterType] = useState('')

  useEffect(() => {
    getAllPets(dispatch)
  }, [dispatch])

  const handleFilterChange = e => {
    setFilterType(e.target.value)
  }

  const filteredPets = state.pets
  .filter(pet => filterType === '' || pet.type === filterType)
  .sort((a, b) => new Date(b.date) - new Date(a.date))

  if (state.loading) {
    return <div>Loading...</div>
  }

  if (state.error) {
    return <div>Error: {state.error}</div>
  }

  return (
    <>
    <h1>Our pets</h1>

    <div>
        <label htmlFor="filter">Filter by type:</label>
        <select id="filter" value={filterType} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
      </div>

      <div>
          {filteredPets.map(pet => (
            <div key={pet._id}>
              <h2>{pet.name}</h2>
              <p>{pet.bread}</p>
              <p>{pet.description}</p>
            </div>
          ))}
      </div>
    </>
  )
}

export default PetsListPage