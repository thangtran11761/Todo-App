async function httpRequestJson(method, uri, body) {
  // const apiUrl = `https://jsonplaceholder.typicode.com/todos${uri}`;
  const apiUrl = `https://60af56fe5b8c300017dec6c8.mockapi.io/tasks${uri}`;

  let options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const res = await fetch(apiUrl, options);
  return res.json();
}

export const get = async () => {
  return httpRequestJson("GET", "");
};

export const post = async (body) => {
  return httpRequestJson("POST", "", body);
};

export const put = async (idNote, body) => {
  return httpRequestJson("PUT", `/${idNote}`, body);
};

export const del = async (idNote) => {
  return httpRequestJson("DELETE", `/${idNote}`);
};
