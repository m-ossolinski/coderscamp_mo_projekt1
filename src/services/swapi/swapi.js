const swapiEnv = process.env.SW_API_BASE_URL;

export const fetchNameFromAPI = (mode, index) => {
  const url = `${swapiEnv}/${mode}/${index}`;

  return fetch(url)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }

      throw Error(resp.statusText);
    })
    .then((resp) => {
      const name = resp.name;
      return name;
    })
    .catch((error) => {
      throw Error(error);
    });
};

export const fetchImgFromAPI = (mode, index) => {
  const url = `../../static/assets/img/modes/${mode}/${index}.jpg`;

  return fetch(url)
    .then((resp) => {
      const stringUrl = resp.url;
      return stringUrl;
    })
    .catch((error) => {
      throw Error(error);
    });
};
