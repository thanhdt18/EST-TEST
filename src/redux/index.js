import { combineReducers } from "redux";
import Articles from "./articles";

const rootReducer = combineReducers({
  articles: Articles,
});

export default rootReducer;
