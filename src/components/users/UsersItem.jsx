import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, FormControl, FormHelperText, MenuItem, Select } from '@mui/material'
import './UsersItem.scss'
import { useUsers } from './UsersContext'
import { getAllUsers, setAsVolunteer } from '../../actions/usersActions'

const UsersItem = () => {
  const { state, dispatch } = useUsers()
  const [filterType, setFilterType] = useState('')
  const [userTypes, setUserTypes] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      await getAllUsers(dispatch)
    }
    fetchUsers()
  }, [dispatch])

  useEffect(() => {
    if (state.users.length > 0) {
      setUsers(state.users)
      const types = [...new Set(state.users.map(user => user.type).filter(type => type))]
      setUserTypes(types)
    }
  }, [state.users])

  const handleFilterChange = e => {
    setFilterType(e.target.value)
  }

  const SetAsVolunteerHandler = async (userId, e) => {
    e.preventDefault()
    await setAsVolunteer(dispatch, userId)
    await getAllUsers(dispatch)
  }

  const filteredUsers = users
    .filter(user => filterType === '' || user.type === filterType)
    .sort((a, b) => a.username.localeCompare(b.username))

  if (state.loading) {
    return <div>Loading...</div>
  }

  if (state.error) {
    return <div>Error: {state.error}</div>
  }

  return (
    <div className="users-list-page">
      <h1>Our Users</h1>

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
            {userTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="users-list">
        {filteredUsers.map(user => (
          <Link to={`/users/${user._id}`} key={user._id}>
            <div className="user-item">
              <div className="user-info">
                <h2>{user.username}</h2>
                <span className={user.isLoggedIn ? ('dot-online'):('dot-offline')}></span>
              </div>
              <p>{user.email}</p>
              <p>{user.type}</p>
              {user.type === 'admin' || user.type === 'volunteer' ? ('') : (<Button variant="contained" color="primary" onClick={(e) => SetAsVolunteerHandler(user._id, e)}>Set volunteer</Button>)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default UsersItem