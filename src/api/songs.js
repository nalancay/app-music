import axios from "axios";
const fromApiResponseToSongs = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};

export default async function getSongs({ keyword }) {
  const ENDPOINT = "https://deezerdevs-deezer.p.rapidapi.com/search";
  const options = {
    method: "GET",
    url: ENDPOINT,
    params: { q: keyword },
    headers: {
      "X-RapidAPI-Key": "7fa82f40bdmshcd4131a2e9a6353p1e0c4bjsn62d72ce8e254",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    if (!response) {
      throw new NetworkError();
    }

    return fromApiResponseToSongs(response.data);
  } catch (err) {
    throw err;
  }
}

class NetworkError extends Error {
  constructor() {
    super("Network error");
  }
}
