import * as api from "../../apis/index";

export const signUp = (user, router) => async (dispatch) => {
  // console.log(user);
  dispatch({
    type: "USER_LOADING",
  });
  try {
    const res = await api.registerUser(user, router);
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: data,
    });

    dispatch({
      type: "CLEAR_ERRORS",
    });
  } catch (err) {
    // try {
    //   const res = await fetch(
    //     `${process.env.NEXT_PUBLIC_API_URL}/user/register`,
    //     {
    //       method: "POST",
    //       body: JSON.stringify(user),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   const data = await res.json();

    // }
    dispatch({
      type: "REGISTER_FAIL",
      payload: err,
    });
  }
};

export const signIn = (user, router) => async (dispatch) => {
  dispatch({
    type: "USER_LOADING",
  });

  try {
    const res = await api.loginUser(user, router);
    console.log(res);

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: res,
    });

    // window.location.href = "/";

    dispatch({
      type: "CLEAR_ERRORS",
    });
    router.push("/");
  } catch (err) {
    dispatch({
      type: "LOGIN_FAIL",
      payload: err,
    });
  }
};

export const signOut = (router) => async (dispatch) => {
  dispatch({
    type: "USER_LOADING",
  });
  try {
    const res = await api.logoutUser();
    // console.log(res);
    if (res.status === 200) {
      dispatch({
        type: "LOGOUT_SUCCESS",
        payload: res.data,
      });
      dispatch({
        type: "CLEAR_ERRORS",
      });
    }
  } catch (err) {
    console.log(err);
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
