import { LOGIN, LOGIN_SUCCESS, LOGOUT } from "./auth.type";

const initialState = {
  isAuthenticate: false,
  currentUser: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isAuthenticate: true
      }
    }
    case LOGOUT: {
      return {
        ...state,
        isAuthenticate: false,
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}

export default reducer;