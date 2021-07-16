import api from './api';

export async function dataLoad() {
  const data = await api({
    method: 'GET',
    url: 'https://60484fd8b801a40017ccd8d0.mockapi.io/gifts',
  });
  return data;
}
