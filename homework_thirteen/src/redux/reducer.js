const initialState = {
  users: ['Monica', 'Ros', 'Rachel', 'Phoebe', 'Chandler', 'Joey'],
  filter: '',
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      }
    default:
      return state
  }
}

export default reducer
