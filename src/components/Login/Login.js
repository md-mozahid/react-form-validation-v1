import React, { useReducer } from 'react'

const initialState = {
  userName: '',
  password: '',
  loggedIn: false,
  error: false,
}
const reducer = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    // case 'SUCCESS':
    //   return {
    //     ...state,
    //     loggedIn: true,
    //   }
    // case 'ERROR':
    //   return {
    //     ...state,
    //     error: 'Invalid',
    //   }
    case 'USERNAME':
      return {
        ...state,
        userName: action.value,
      }
    case 'PASSWORD':
      return {
        ...state,
        password: action.value,
      }
    default:
      return state
  }
}
export default function Login() {
  const [updatedState, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="userName">User Name :</label>
        <input
          type="text"
          value={updatedState.userName}
          onChange={(e) =>
            dispatch({ type: 'USERNAME', value: e.target.value })
          }
        />
        <br />
        <br />
        <label htmlFor="password">Password :</label>
        <input
          type="text"
          value={updatedState.password}
          onChange={(e) =>
            dispatch({ type: 'PASSWORD', value: e.target.value })
          }
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
