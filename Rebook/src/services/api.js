import {create} from 'apisauce';

const api = create({
  baseURL: 'https://ah-01.herokuapp.com',
});

api.addResponseTransform(response => {
  if (!response.ok) {
    throw response;
  }
});

export default api;
