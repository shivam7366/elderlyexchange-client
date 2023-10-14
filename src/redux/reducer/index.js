import { combineReducers } from "redux";
import user from "./UserReducer";

import ExperienceReducer from "./ExperienceReducer";

const rootReducer = combineReducers({
  user,
  ExperienceReducer,
});

export default rootReducer;
