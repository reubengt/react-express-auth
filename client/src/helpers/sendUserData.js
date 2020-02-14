const sendUserData = async (endpoint, userData) => {
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(userData)
  });
};

export default sendUserData;
