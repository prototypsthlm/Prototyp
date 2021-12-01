const BASE_URL = 'http://localhost:3001';

const apiService = {};

apiService.postFile = (obj) => {
  return fetch(`${BASE_URL}/addfile`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.getAllFiles = () => {
  return fetch(`${BASE_URL}/getallfiles`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.deleteFile = (id) => {
  return fetch(`${BASE_URL}/deletefile`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(id),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default apiService;
