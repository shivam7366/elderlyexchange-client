const initState = {
  experience: null,
  experiences: [],
  isLoading: false,
  error: null,
  success: null,
  message: null,
};

const ExperienceReducer = (state = initState, action) => {
  switch (action.type) {
    case "EXPERIENCE_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "EXPERIENCE_LOADED":
      return {
        ...state,
        isLoading: false,
        experience: action.payload,
      };
    case "EXPERIENCES_LOADED":
      return {
        ...state,
        isLoading: false,
        experiences: action.payload,
      };
    case "EXPERIENCE_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
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

export default ExperienceReducer;
