import { Text, Stack, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import color from "../../utils/color";
import List from "../components/List";
import Search from "../components/Search";
import TabLink from "../components/TabLink";
import { getDataBaseOnMethod, searchData } from "../../utils/helper";

export default function ListPage() {
  const LIMIT = 6;
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState({});

  const router = useRouter();
  const { type } = router.query;
  const activeType = type?.replace("-", "_");
  const methodType = activeType?.toUpperCase();
  const prevMethodType = usePrevious(methodType);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  // Search data every methodType and Page Change
  useEffect(() => {
    if (methodType) {
      let tempData = data;
      let tempPage = page;
      if (prevMethodType !== methodType) {
        tempPage = 1;
        tempData = [];
        setQuery({});
        setPage(tempPage);
        setData(tempData);
      }
      getDataBaseOnMethod(
        methodType,
        LIMIT,
        tempData,
        tempData,
        query,
        setData
      );
    }
  }, [methodType, page]);

  // Search data every query changes
  useEffect(() => {
    searchData(query, LIMIT, page, setData);
  }, [query]);

  return (
    // This minH Base on screenSize - headerNavSize - footerSize
    <Stack
      minH="calc(100vh - 40px - (32px * 2) - (24px * 4))"
      spacing="1em"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <TabLink active={activeType}></TabLink>
      {/* Show if type list search for search bar  */}
      {type === "search" && <Search setQuery={(e) => setQuery(e)} />}
      {/* Show List query or query.keyword not empty string or undefined */}
      {type === "search" &&
      (!Object.keys(query).length || !query?.keyword) ? null : (
        <List data={data}></List>
      )}
      {/* Hide if data empty */}
      {data && data.length && (
        <Box
          backgroundColor={color.active}
          padding=".5em 1em"
          borderRadius="40px"
          mt="1.5em !important"
          cursor="pointer"
          onClick={() => setPage(page + 1)}
          transition="all .2s"
          _hover={{ backgroundColor: "#7f1d1d" }}
        >
          <Text fontSize={{ base: "1em", md: "1.2em" }}>Load More!</Text>
        </Box>
      )}
    </Stack>
  );
}
