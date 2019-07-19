import { HELLO_TITLE } from '../constants/action-types'

const initialState = {
  title: ''
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'HELLO_TITLE':
      return {...state, title: action.payload }
    default:
      return state;
  }
}

export default rootReducer;