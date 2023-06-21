import { createContext, useReducer } from 'react'

export const TuitionsContext = createContext()

export const tuitionsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TUITIONS':
      return { 
        tuitions: action.payload 
      }
    case 'CREATE_TUITIONS':
      return { 
        tuitions: [action.payload, ...state.tuitions] 
      }
    case 'DELETE_TUITION':
      return { 
        tuitions: state.tuitions.filter(t => t._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const TuitionsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tuitionsReducer, { 
    tuitions: null
  })
  
  return (
    <TuitionsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </TuitionsContext.Provider>
  )
}