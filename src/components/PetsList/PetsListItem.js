import React, { useEffect, useState } from 'react'
import { usePetsList } from './petsListContext'
import { getAllPets } from '../../actions/petsListActions'
import { Link } from 'react-router-dom'
import './PetsListItem.scss'
import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material'

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
    <div className="pets-list-page">
      <h1>Our Pets</h1>

      <div className="filter-container">
      <FormControl>
      <FormHelperText>Filter by type</FormHelperText>
          <Select
            labelId="filter-label"
            id="filter"
            value={filterType}
            onChange={handleFilterChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="dog">Dog</MenuItem>
            <MenuItem value="cat">Cat</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="pets-list">
        {filteredPets.map(pet => (
          <Link to={`/pets/${pet._id}`} key={pet._id}>
            <div className="pet-item">
              <h2>{pet.name}</h2>
              <p>{pet.breed}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PetsListPage