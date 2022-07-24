import { getSearchList, getTopList, METHOD } from "../pages/api/api";

export function getDataBaseOnMethod(
  methodType,
  limit,
  page,
  data,
  dataSeter
) {
  switch (methodType) {
    case "TOP_TRACKS":
      getTopList(METHOD[methodType], limit, page).then((res) => {
        setIfNotError(res.error, data, res.tracks.track, dataSeter, res.tracks["@attr"].totalPages);
      });
      break;
    case "TOP_ARTISTS":
      getTopList(METHOD[methodType], limit, page).then((res) => {
        setIfNotError(res.error, data, res.artists.artist, dataSeter, res.artists["@attr"].totalPages);
      });
      break;

    default:
      break;
  }
}

export function searchData(query, limit, page, dataSeter) {
  // search no need load more set totalPage to 0
  if (query?.type === "Artist") {
    getSearchList(METHOD["ARTIS_SEARCH"], limit, page, query?.keyword).then(
      (res) => {
        setIfNotError(
          res.error,
          [],
          res.results?.artistmatches.artist,
          dataSeter,
          0
        );
      }
    );
  } else if (query?.type === "Track") {
    getSearchList(METHOD["TRACK_SEARCH"], limit, page, query?.keyword).then(
      (res) => {
        setIfNotError(
          res.error,
          [],
          res.results?.trackmatches.track,
          dataSeter,
          0
        );
      }
    );
  }
}

function setIfNotError(error, tempData, data, dataSeter, totPage) {
  if (!error && data) {
    dataSeter({result: [...tempData, ...data], totPage: totPage});
  } else {
    dataSeter({ error: true });
  }
}
