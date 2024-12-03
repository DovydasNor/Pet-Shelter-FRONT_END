import React, { useEffect } from 'react'
import { useCommenting } from './commentingContext'
import { getComments, deleteComment } from '../../actions/commentingActions'
import { List, ListItem, ListItemText, Typography, CircularProgress, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import './commentingItem.scss'

const CommentingItem = ({ petId }) => {
  const { state, dispatch } = useCommenting()

  useEffect(() => {
    getComments(dispatch, petId)
  }, [dispatch, petId])

  const handleDelete = (commentId) => {
    deleteComment(dispatch, commentId)
  }

  return (
    <div className="commenting-item">
      {state.loading ? (
        <CircularProgress />
      ) : (
        <List>
          {state.comments.map((comment) => (
            <ListItem key={comment._id} className="comment-item">
              <ListItemText
                primary={comment.comment}
                secondary={`Volunteer: ${comment.volunteer?.name}`}
              />
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(comment._id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  )
}

export default CommentingItem