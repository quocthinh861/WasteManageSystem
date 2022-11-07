import { createStore } from 'redux'

const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'closeopen':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
