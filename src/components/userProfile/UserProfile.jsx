import { useEffect, useState } from 'react'
import { getSingleUser, updateUserProfile } from '../../actions/usersActions'
import { useUserProfile } from './UserProfileContext'
import { useParams } from 'react-router'
import { Button, Modal, Box, TextField, Typography, Paper, Grid } from '@mui/material'
import './UserProfile.scss'

const UserProfile = () => {
  const { id } = useParams()
  const { state, dispatch } = useUserProfile()
  const { user, loading, error } = state
  const [open, setOpen] = useState(false)

  useEffect(() => {
    getSingleUser(dispatch, id)
  }, [dispatch, id])

  if (loading) {
    return <Typography variant="h6">Loading...</Typography>
  }

  if (error) {
    return <Typography variant="h6" color="error">Error: {error}</Typography>
  }

  if (!user) {
    return <Typography variant="h6">No user data available</Typography>
  }

  const editHandler = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const saveChangesHandler = async (e) => {
    e.preventDefault()
    const username = e.target.username.value
    const email = e.target.email.value
    const phone = e.target.phone.value
    const about = e.target.about.value
    const userData = { username, email, phone, about }
    await updateUserProfile(dispatch, id, userData)
    setOpen(false)
  }

  return (
    <div className="user-profile">
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <img src={user.image || "defaultUserImage.png"} alt="userImage" className="user-image" />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4">{user.username}</Typography>
            <Typography variant="subtitle1">{user.type}</Typography>
            <Typography variant="body1">{user.email}</Typography>
            <Typography variant="body1">{user.phone || "No phone number provided"}</Typography>
            <Typography variant="body1">{user.about || "No additional information provided"}</Typography>
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" onClick={editHandler} sx={{ mt: 2 }}>Edit profile info</Button>
      </Paper>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 24, maxWidth: 500, mx: 'auto', mt: 5 }}>
          <Typography variant="h5" component="h1" gutterBottom>Edit profile</Typography>
          <form className="edit-profile-form" onSubmit={saveChangesHandler}>
            <TextField
              label="Username"
              id="username"
              name="username"
              defaultValue={user.username}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Email"
              id="email"
              name="email"
              type="email"
              defaultValue={user.email}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Phone"
              id="phone"
              name="phone"
              type="tel"
              defaultValue={user.phone}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="About"
              id="about"
              name="about"
              defaultValue={user.about}
              fullWidth
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
              <Button variant="contained" color="primary" type="submit">Save changes</Button>
              <Button variant="outlined" color="secondary" onClick={handleClose}>Cancel</Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default UserProfile