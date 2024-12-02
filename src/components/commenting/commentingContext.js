import React, { createContext, useReducer, useContext } from 'react'
import commentingReducer from './commentingReducer'

const CommentingContext = createContext()

const initialState = {
  comments: [],
  loading: false,
  error: null,
}

export const CommentingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(commentingReducer, initialState)

  return (
    <CommentingContext.Provider value={{ state, dispatch }}>
      {children}
    </CommentingContext.Provider>
  )
}

export const useCommenting = () => useContext(CommentingContext)