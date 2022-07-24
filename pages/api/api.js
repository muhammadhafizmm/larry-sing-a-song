const API_KEY = "b9db3884ccba8ae4266cfd05bd860156";

async function fetchGet(payload) {
  // set urls
  const url = new URL("https://ws.audioscrobbler.com/2.0");
  const params = { ...payload, api_key: API_KEY, format: "json" };

  // set all query parameter
  for (const i in params) {
    url.searchParams.append(i, params[i]);
  }

  // fetch and return response json
  const response = await fetch(url, {});
  return response.json();
}

export function getTopList(method, limit, page) {
  return fetchGet({ method: method, limit: limit, page: page });
}

export async function getSearchList(method, limit, page, query) {
  return fetchGet({
    method: method,
    [method === METHOD.ARTIS_SEARCH ? "artist" : "track"]: query,
    limit: limit,
    page: page
  });
}

export const METHOD = {
  TOP_TRACKS: "chart.gettoptracks",
  TOP_ARTISTS: "chart.gettopartists",
  ARTIS_SEARCH: "artist.search",
  TRACK_SEARCH: "track.search",
}