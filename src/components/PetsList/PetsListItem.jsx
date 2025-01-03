import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material'
import './PetsListItem.scss'
import { usePetsList } from './petsListContext'
import { getAllPets } from '../../actions/petsListActions'

const PetsListPage = () => {
  const { state, dispatch } = usePetsList()
  const [filterType, setFilterType] = useState('')
  const [petTypes, setPetTypes] = useState([])
  const [pets, setPets] = useState([])

  useEffect(() => {
    const fetchPets = async () => {
      await getAllPets(dispatch)
    }
    fetchPets()
  }, [dispatch])

  useEffect(() => {
    if (state.pets.length > 0) {
      setPets(state.pets)
      const types = [...new Set(state.pets.map(pet => pet.type))]
      setPetTypes(types)
    }
  }, [state.pets])

  const handleFilterChange = e => {
    setFilterType(e.target.value)
  }

  const filteredPets = pets
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
            {petTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </MenuItem>
            ))}
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