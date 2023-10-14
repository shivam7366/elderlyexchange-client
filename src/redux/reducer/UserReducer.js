let item = null;
if (typeof window !== "undefined") {
  // Perform localStorage action
  item = localStorage.getItem("token");
}

const initState = {
  user: null,
  isAuthenticated: !!item,
  isLoading: false,
  error: null,
  success: null,
  message: null,
  token: null,
};
// console.log(item, initState.isAuthenticated);

const UserReducer = (state = initState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "USER_LOADING":
      return {
        ...state,
        success: false,
        error: false,
        message: "User Loading",
        isLoading: true,
      };
    case "USER_LOADED":
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        success: true,
        error: false,
        message: "User Loaded",
        user: action?.payload?.user,
      };
    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS":
      localStorage.setItem("token", action.payload?.token);

      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        success: true,
        error: false,

        // message: action.payload.message,
        ...action.payload,
      };
    case "AUTH_ERROR":
    case "LOGIN_FAIL":
    case "LOGOUT_SUCCESS":
    case "REGISTER_FAIL":
      localStorage.removeItem("token");

      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
        token: null,
        ...action.payload,
      };
    case "CLEAR_ERRORS":
      return {
        ...state,
        error: null,
        success: null,
        message: null,
      };
    default:
      return state;
  }
};

export default UserReducer;
