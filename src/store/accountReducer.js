// action - state management
import {
  USER_ACCOUNT_INITIALIZE,
  USER_LOGIN,
  USER_LOGOUT,
  ADMIN_LOGIN,
  ADMIN_LOGOUT,
  ADMIN_ACCOUNT_INITIALIZE,
  ADMIN_GET_ALL_USERS
} from './actions';

export const initialState = {
  token: '',
  isUserLoggedIn: false,
  isAdminLoggedIn: false,
  isInitialized: false,
  user: null,
  admin: null,
  role: null,
  tokenId: '',
  users: []
};

//-----------------------|| ACCOUNT REDUCER ||-----------------------//

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACCOUNT_INITIALIZE: {
      const { isUserLoggedIn, user, token, role, tokenId } = action.payload;
      return {
        ...state,
        isUserLoggedIn: true,
        isInitialized: true,
        token,
        user,
        role,
        tokenId,
      };
    }

    case USER_LOGIN: {
      const { user, role } = action.payload;
      return {
        ...state,
        isUserLoggedIn: true,
        user,
        role,
      };
    }
    case USER_LOGOUT: {
      return {
        ...state,
        isUserLoggedIn: false,
        token: '',
        user: null,
        tokenId: '',
      };
    }
    case ADMIN_ACCOUNT_INITIALIZE: {
      const { isAdminLoggedIn, admin, token, role, user } = action.payload;
      return {
        ...state,
        isAdminLoggedIn,
        isInitialized: true,
        token,
        admin,
        role,
        user
      };
    }

    case ADMIN_LOGIN: {
      const { admin, role } = action.payload;
      return {
        ...state,
        isAdminLoggedIn: true,
        admin,
        role,
        users: action.payload
      };
    }
    case ADMIN_LOGOUT: {
      return {
        ...state,
        isAdminLoggedIn: false,
        token: '',
        admin: null,
      };
    }
    case ADMIN_GET_ALL_USERS: {
      // const {  allUsers } = action.payload
      return {
        ...state,
        // isAdminLoggedIn,
        // token: '',
        users: action.payload
      }
    }

    default: {
      return { ...state };
    }
  }
};

export default accountReducer;
