import { combineReducers } from 'redux'

function seetus (state =[], action) {
  switch (action.type) {
    case 'ADD_SEETU':
      return [...state,action.seetu] 
    case 'EDIT_SEETU':
      return state.map((seetu, index) => {
        if (index === action.index) {
          return Object.assign({}, seetu, action.seetu)
        }
        return seetus
      })
    default:
      return state
  }  
}

function newSeetu (state =[], action) {
  switch (action.type) {
    case 'UPDATE_NEW_SEETU':
      return Object.assign({},state,action.newSeetu)
    case 'CLEAR_NEW_SEETU':
        return ''
    default:
      return state
  }  
}


export default combineReducers({seetus,newSeetu})
