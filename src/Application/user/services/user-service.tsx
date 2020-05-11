import axios from 'axios';

export default {
  get(id: string | number) {
    return axios
      .get(`users/${id}`)
      .then(response => {
        return response.data;
      });
  },
  getPaged(params: object) {
    return axios
      .post(`users`, {params: params})
      .then(response => {
        return response.data;
      });
  },
  add(user: object) {
    return axios.post("users", user);
  },
  update(user: any) {
    return axios.put(`users/${user.id}`, user);
  },
  delete(id: string | number) {
    return axios.delete(`users/${id}`);
  },
};
