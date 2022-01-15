const swapiEnv = process.env.SW_API_BASE_URL;

/*

// real API fetch function

export const fetchIdsFromAPI = async (gameMode) => {
  const url = `${swapiEnv}/${gameMode}`;

  try {
    const response = await fetch(url);
    const results = await response.json();

    console.log(results);
  } catch (err) {
    console.log(err);
    throw err;
  }
};*/

export const fetchIdsFromAPI = async (gameMode) => {
  const url = `http://localhost:3000/${gameMode}`;

  try {
    const response = await fetch(url);
    const results = await response.json();

    return results.map((item) => {
      const id = item.id;
      return id;
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const fetchNameFromAPI = async (gameMode, index) => {
  const url = `http://localhost:3000/${gameMode}/${index}`;

  try {
    const response = await fetch(url);
    const results = await response.json();

    const name = results.name;
    return name;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const fetchImgFromAPI = async (gameMode, index) => {
  const url = `../../static/assets/img/modes/${gameMode}/${index}.jpg`;

  try {
    const response = await fetch(url, { responseType: 'blob' });
    const stringUrl = response.url;
    return stringUrl;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
