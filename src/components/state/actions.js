
export const SET_USER = 'SET_USER';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setPatients = (patients) => ({
  type: 'SET_PATIENTS',
  payload: patients,
});