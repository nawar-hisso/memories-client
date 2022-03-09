import * as api from "../api";
import { TYPES } from "../constants/actionTypes";

export const googleSignIn = (res, history) => async (dispatch) => {
  try {
    const result = res?.profileObj;
    const token = res?.tokenId;
    const action = { type: TYPES.GOOGLE_OAUTH, payload: { result, token } };
    dispatch(action);
    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    const action = { type: TYPES.AUTH, payload: data };
    dispatch(action);
    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    const action = { type: TYPES.AUTH, payload: data };
    dispatch(action);
    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const logOut = (history) => async (dispatch) => {
  try {
    const action = { type: TYPES.LOGOUT };
    dispatch(action);
    history.push("/auth");
  } catch (error) {
    console.log(error.message);
  }
};
