const fromApiResponseToSongs = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};

export default async function getSongs({ keyword = "tini" }) {
  const apiURL = `https://api.deezer.com/search?q=${keyword}`;

  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new NetworkError();
    }
    const apiResponse = await response.json();
    return fromApiResponseToSongs(apiResponse);
  } catch (err) {
    throw err;
  }
}

class NetworkError extends Error {
  constructor() {
    super("Network error");
  }
}
