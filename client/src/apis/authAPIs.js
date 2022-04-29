/* eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (email, password, setEmail, setPwd, setUser) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        password
      }
    });

    if (res.data.status === 'success') {
      console.log(res.data);
      window.localStorage.setItem('user', JSON.stringify(res.data.data.user));
      setUser(res.data.data.user);
      return res.data.data.user;
    }
  } catch (err) {
    console.log(err);
    showAlert('error', err.response.data.message);
    setEmail('');
    setPwd('');
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout'
    });
    if (res.data.status === 'success') {
      location.reload(true);
    }
  } catch (err) {
    showAlert('error', 'Error logging out! Try again');
  }
};

export const signup = async (
  name,
  email,
  password,
  setName,
  setEmail,
  setPwd
) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        password
      }
    });

    if (res.data.status === 'success') {
      console.log(res.data);
      window.localStorage.setItem('user', JSON.stringify(res.data.data.user));
      showAlert('success', 'Thank you for signing up');

      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    console.log(err);
    showAlert('error', err.response.data.message);
    setEmail('');
    setPwd('');
    setName('');
  }
};
