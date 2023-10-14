import axios from "axios";

export const signUp = (user) => async (dispatch) => {
  const router = useRouter();
  // console.log(user);
  dispatch({
    type: "USER_LOADING",
  });

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/register`,
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    dispatch({
      type: "REGISTER_SUCCESS",
      payload: data,
    });

    dispatch({
      type: "CLEAR_ERRORS",
    });
  } catch (err) {
    dispatch({
      type: "REGISTER_FAIL",
      payload: err,
    });
  }
};

export const signIn = (user) => async (dispatch) => {
  // console.log(user);
  dispatch({
    type: "USER_LOADING",
  });

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
      method: "POST",

      body: JSON.stringify(user),

      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await res.json();
    console.log(json);

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: json,
    });
    // window.location.href = "/";
    dispatch({
      type: "CLEAR_ERRORS",
    });
  } catch (err) {
    dispatch({
      type: "LOGIN_FAIL",
      payload: err,
    });
  }
};

export const signOut = () => async (dispatch) => {
  dispatch({
    type: "USER_LOADING",
  });

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/logout`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const json = await res.json();
    dispatch({
      type: "LOGOUT_SUCCESS",
      payload: json,
    });

    dispatch({
      type: "CLEAR_ERRORS",
    });
  } catch (err) {
    dispatch({
      type: "AUTH_ERROR",
      payload: err,
    });
  }
};

export const updateProfile = (user) => async (dispatch) => {
  dispatch({
    type: "USER_LOADING",
  });

  try {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/user/update`,
      user
    );

    dispatch({
      type: "UPDATE_USER_SUCCESS",
      payload: res.data,
    });

    dispatch({
      type: "CLEAR_ERRORS",
    });
  } catch (err) {
    dispatch({
      type: "UPDATE_PROFILE_FAIL",
      payload: err,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: "CLEAR_ERRORS",
  });
};

export const loadUser = () => async (dispatch) => {
  dispatch({
    type: "USER_LOADING",
  });

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/me`);

    dispatch({
      type: "USER_LOADED",
      payload: res.data,
    });

    dispatch({
      type: "CLEAR_ERRORS",
    });
  } catch (err) {
    dispatch({
      type: "AUTH_ERROR",
      payload: err.response.data,
    });
  }
};
