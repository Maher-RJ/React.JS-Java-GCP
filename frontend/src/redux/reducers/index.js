import { combineReducers } from "redux";
import { gcsDataReducer } from "./gcsDataReducer";

const CombinedReducers = combineReducers({
  gcsData: gcsDataReducer,
});

export default CombinedReducers;
