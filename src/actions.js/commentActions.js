import axios from "axios";
import {
  COMMENT_LIST_FAIL,
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_SUCCESS,
  COMMENT_POST,
  COMMENT_PUT,
  COMMENT_DELETE,
  COMMENT_POST_FAIL,
  COMMENT_PUT_FAIL,
  COMMENT_DELETE_FAIL,
} from "../constants/commentConstants";

export const listComments = () => async (dispatch) => {
  try {
    dispatch({ type: COMMENT_LIST_REQUEST });
    const { data } = await axios.get("/api/comments");
    dispatch({ type: COMMENT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: COMMENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const postComment = (comment) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.post(`/api/comments`, comment, config).then((response) => {
      console.log(response);
      dispatch({
        type: COMMENT_POST,
        payload: response.data,
      });
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: COMMENT_POST_FAIL,
      payload: message,
    });
  }
};

export const putComment = (comment) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .put(`/api/comments/${comment._id}`, comment, config)
      .then((response) => {
        dispatch({ type: COMMENT_PUT, payload: response.data });
      });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: COMMENT_PUT_FAIL,
      payload: message,
    });
  }
};

export const deleteComment = (comment) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (comment._id) {
      await axios.delete(`/api/comments/${comment._id}`, config);
    }

    dispatch({ type: COMMENT_DELETE, payload: comment });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: COMMENT_DELETE_FAIL,
      payload: message,
    });
  }
};
