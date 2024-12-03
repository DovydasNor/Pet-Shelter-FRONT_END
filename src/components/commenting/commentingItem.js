import React, { useEffect } from 'react'
import { useCommenting } from './commentingContext'
import { getComments } from '../../actions/commentingActions'
import { List, ListItem, ListItemText, Typography, CircularProgress } from '@mui/material'
import './commentingItem.scss'

const CommentingItem = ({ petId }) => {
  const { state, dispatch } = useCommenting()

  useEffect(() => {
    getComments(dispatch, petId)
  }, [dispatch, petId])

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
                secondary={`Commented by: ${comment.volunteer?.name}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  )
}

export default CommentingItem