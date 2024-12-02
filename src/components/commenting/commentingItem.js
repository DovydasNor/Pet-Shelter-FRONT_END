import React, { useEffect } from 'react'
import { useCommenting } from './commentingContext'
import { getComments } from '../../actions/commentingActions'

const CommentingItem = ({ petId }) => {
  const { state, dispatch } = useCommenting()

  useEffect(() => {
    getComments(dispatch, petId)
  }, [dispatch, petId])

  return (
    <>
      <h2>Comments</h2>
      {state.loading ? (
        <div>Loading comments...</div>
      ) : (
        <ul>
          {state.comments.map((comment) => (
            <li key={comment._id}>
              {comment.comment} (Volunteer: {comment.volunteer?.name})
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default CommentingItem