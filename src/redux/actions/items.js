import http from "../../helpers/http";
import { BACKEND_URL } from "@env";

export const getItems = () => {
  return async (dispatch) => {
    try {
      const { data } = await http().get(`${BACKEND_URL}/items`);
      // console.log(data);
      dispatch({
        type: "ITEM_GET_LIST",
        payload: data.results,
      });
    } catch (error) {
      console.log("error");
    }
  };
};
