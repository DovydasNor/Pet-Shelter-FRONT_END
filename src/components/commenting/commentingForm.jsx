import { useState, useEffect } from 'react'
import { useCommenting } from './commentingContext'
import { createComment } from '../../actions/commentingActions'
import { API_URL } from '../../config'
import { TextField, Button, MenuItem, FormControl, InputLabel, Select } from '@mui/material'
import './commentingForm.scss'

const CommentingForm = ({ petId }) => {
  const { dispatch } = useCommenting()
  const [commentText, setCommentText] = useState('')
  const [volunteerId, setVolunteerId] = useState('')
  const [volunteers, setVolunteers] = useState([])

  useEffect(() => {
    fetchVolunteers()
  }, [])

  const fetchVolunteers = async () => {
    try {
      const response = await fetch(`${API_URL}/api/volunteers`)
      const data = await response.json()
      setVolunteers(data)
    } catch (error) {
      console.error('Error fetching volunteers:', error)
    }
  }

  const handleCommentSubmit = async () => {
    const comment = { comment: commentText, volunteerId }
    await createComment(dispatch, petId, comment)
    setCommentText('')
    setVolunteerId('')
  }

  return (
    <form onSubmit={handleCommentSubmit} className="commenting-form">
      <FormControl fullWidth margin="normal">
        <TextField
          id="comment"
          label="Comment"
          variant="outlined"
          multiline
          rows={4}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel id="volunteer-label">Volunteer</InputLabel>
        <Select
          labelId="volunteer-label"
          id="volunteerId"
          value={volunteerId}
          onChange={(e) => setVolunteerId(e.target.value)}
          label="Volunteer"
        >
          <MenuItem value="" disabled>Select a volunteer</MenuItem>
          {volunteers.map((volunteer) => (
            <MenuItem key={volunteer._id} value={volunteer._id}>
              {volunteer.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Comment
      </Button>
    </form>
  )
}

export default CommentingForm