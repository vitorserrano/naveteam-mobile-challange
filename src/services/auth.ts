import api from './api';

interface Response {
  id: string;
  email: string;
  token: string;
}

export const signIn = async (
  email: string,
  password: string,
): Promise<Response> => {
  const credentials = {
    email,
    password,
  };

  const { data } = await api.post('/users/login', credentials);

  return data;
};
