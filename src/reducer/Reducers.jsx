export const reducer = (state, action) => {

  switch (action.type) {

    case 'GET':
      return action.payload

    case 'ADD':
      return [...state, action.payload]

    case 'DELETE':
      return state.filter(
        (item) => item.id !== action.payload
      )

    case 'UPDATE':
      return state.map((item) =>
        item.id === action.payload.id
          ? action.payload
          : item
      )

    default:
      return state
  }
}