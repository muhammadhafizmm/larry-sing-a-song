import { useEffect } from "react";
import { getSearchList, getTopList, METHOD } from "./api";

const Song = () => {
    useEffect(() => {
        getTopList(METHOD.TOP_TRACKS, 10, 1).then((res) => console.log(res))
        getTopList(METHOD.TOP_TRACKS, 10, 1).then((res) => console.log(res))
        getSearchList(METHOD.ARTIS_SEARCH, 10, 1, "ariana").then((res) => console.log(res))
        getSearchList(METHOD.TRACK_SEARCH, 10, 1, "off my face").then((res) => console.log(res))
       
    }, [])
    return <h1>Hello world</h1>
}

export default Song