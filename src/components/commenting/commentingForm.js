import React, { useState, useEffect } from 'react'
import { useCommenting } from './commentingContext'
import { createComment } from '../../actions/commentingActions'
import { API_URL } from '../../config'
import { resetForm } from '../../actions/formActions'

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
    <form onSubmit={handleCommentSubmit}>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label htmlFor="volunteerId">Volunteer:</label>
        <select
          id="volunteerId"
          value={volunteerId}
          onChange={(e) => setVolunteerId(e.target.value)}
        >
          <option value="" disabled>Select a volunteer</option>
          {volunteers.map((volunteer) => (
            <option key={volunteer._id} value={volunteer._id}>
              {volunteer.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Add Comment</button>
    </form>
  )
}

export default CommentingForm