import api from "../../utils/api";
import { gcsConstants } from "../constants";
const { GET_GCS_DATA_REQ, GET_GCS_DATA_ERR, GET_GCS_DATA } = gcsConstants;

export const getGcsData = (page) => async (dispatch) => {
  dispatch({ type: GET_GCS_DATA_REQ });
  try {
    var res = await api.get(`/data/search?page=${page}`, {
      headers: { authorization: `${localStorage.getItem("token")}` },
    });
    if (res.data && !res.data.error) {
      dispatch({ type: GET_GCS_DATA, payload: res.data.content });
    } else {
      dispatch({ type: GET_GCS_DATA_ERR, payload: res.data.error });
    }
  } catch (e) {
    dispatch({ type: GET_GCS_DATA_ERR, payload: e.message });
  }
};
