import { getSearchList, getTopList, METHOD } from "../pages/api/api";

export function getDataBaseOnMethod(
  methodType,
  limit,
  page,
  data,
  query,
  dataSeter
) {
  switch (methodType) {
    case "TOP_TRACKS":
      getTopList(METHOD[methodType], limit, page).then((res) => {
        setIfNotError(res.error, data, res.tracks.track, dataSeter);
      });
      break;
    case "TOP_ARTISTS":
      getTopList(METHOD[methodType], limit, page).then((res) => {
        setIfNotError(res.error, data, res.artists.artist, dataSeter);
      });
      break;
    case "SEARCH":
      if (query?.type === "Artist") {
        getSearchList(METHOD["ARTIS_SEARCH"], limit, page, query?.keyword).then(
          (res) => {
            setIfNotError(
              res.error,
              data,
              res.results?.artistmatches.artis,
              dataSeter
            );
          }
        );
      } else if (query?.type === "Track") {
        getSearchList(METHOD["TRACK_SEARCH"], limit, page, query?.keyword).then(
          (res) => {
            setIfNotError(
              res.error,
              data,
              res.results?.trackmatches.track,
              dataSeter
            );
          }
        );
      }
      break;

    default:
      break;
  }
}

export function searchData(query, limit, page, dataSeter) {
  if (query?.type === "Artist") {
    getSearchList(METHOD["ARTIS_SEARCH"], limit, page, query?.keyword).then(
      (res) => {
        if (!res.error) {
          dataSeter(res.results?.artistmatches.artist);
        }
      }
    );
  } else if (query?.type === "Track") {
    getSearchList(METHOD["TRACK_SEARCH"], limit, page, query?.keyword).then(
      (res) => {
        if (!res.error) {
          dataSeter(res.results?.trackmatches.track);
        }
      }
    );
  }
}

function setIfNotError(error, tempData, data, dataSeter) {
  if (!error) {
    dataSeter([...tempData, ...data]);
  }
}
