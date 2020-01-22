import { TITLE } from '../constants/action-types'

const initialState = {
  title: ''
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'TITLE':
      return {...state, title: action.payload }
    default:
      return state;
  }
}

export default rootReducer;