import axios from "axios";
import React from "react";
import { useRouter } from "next/router";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const registerUser = async (user, router) => {
  try {
    const { res } = await axios.post(`${API_URL}/user/register`, user);

    if (res.ok) {
      router.push("/");
      localStorage.setItem("token", res?.data?.token);
      return res.data;
    }
  } catch (err) {
    return err.response.data;
  }
};

export const loginUser = async (user, router) => {
  // const router = useRouter();
  try {
    const res = await axios.post(`${API_URL}/user/login`, user);

    if (res.status === 200) {
      localStorage.setItem("token", res?.data?.token);
      // router.push("/");
      return res.data;
    }
  } catch (err) {
    return err.response;
  }
};

export const logoutUser = async () => {
  const token = getToken();
  try {
    const res = await axios.post(`${API_URL}/user/logout`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    return res;
  } catch (err) {
    return err;
  }
};
