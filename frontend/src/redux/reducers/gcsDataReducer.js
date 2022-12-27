import { gcsConstants } from "../constants";
const {
  // GET
  GET_GCS_DATA_REQ,
  GET_GCS_DATA_ERR,
  GET_GCS_DATA,
} = gcsConstants;

const initialState = {
  // get
  getComunityLoading: false,
  getComunityErr: false,
  getComunityErrText: "",
  data: [],
};

export const gcsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    // get
    case GET_GCS_DATA_REQ:
      return {
        ...state,
        getComunityLoading: true,
      };
    case GET_GCS_DATA_ERR:
      return {
        ...state,
        getComunityLoading: false,
        getComunityErr: true,
        getComunityErrText: action.payload,
      };
    case GET_GCS_DATA:
      return {
        ...state,
        getComunityLoading: false,
        getComunityErr: false,
        getComunityErrText: "",
        data: state.data.concat(action.payload),
      };
    default:
      return state;
  }
};
