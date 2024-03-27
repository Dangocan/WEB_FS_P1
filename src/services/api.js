const api = async (url) =>
  await fetch(`https://api.nobelprize.org/2.1${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("Erro:", error);
      return data;
    });

export default api;
