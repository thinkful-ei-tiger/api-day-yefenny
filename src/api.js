const BASE_URL = 'https://thinkful-list-api.herokuapp.com/yefenny';

const listApiFetch = function (...args) {
  let error;
  fetch(...args)
    .then((res) => {
      if (!res.ok) {
        error = { code: res.status };

        if (!res.headers.get('content-type').includes('json')) {
          error.message = res.statusText;
          return Promise.reject(error);
        }
      }

      return res.json();
    })
    .then((data) => {
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }
      console.log(data);
      return data;
    });
};

const getItems = function () {
  return listApiFetch(`${BASE_URL}/items`);
};

const createItem = function (name) {
  const newItem = JSON.stringify({ name });

  return listApiFetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newItem
  });
};

const updateItem = function (id, updateData) {
  return listApiFetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updateData)
  });
};

const deleteItem = function (id) {
  return listApiFetch(`${BASE_URL}/items/${id}`, { method: 'DELETE' });
};

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};
