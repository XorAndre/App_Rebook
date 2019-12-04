import {create} from 'apisauce';

const api = create({
  baseURL: 'https://api.basicgym.com.br/mobile/v1',
});

api.addResponseTransform(response => {
  if (!response.ok) {
    throw response;
  }
});

export default api;
