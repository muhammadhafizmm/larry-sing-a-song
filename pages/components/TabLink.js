import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { color } from "../../styles/utils";

export default function TabLink({ active }) {
  const router = useRouter();
  const tabLink = {
    top_tracks: { title: "Top Track", link: `/list/top-tracks` },
    top_artists: { title: "Top Artist", link: `/list/top-artists` },
    search: { title: "Search", link: "/list/search" },
  };

  return (
    <Flex
      width={{ base: '280px', md: '420px' }}
      zIndex="3"
      justifyContent="space-between"
      paddingTop={active ? "0" : "2em"}
    >
      {Object.keys(tabLink).map((key, idx) => (
        <Box onClick={() => router.push(tabLink[key]["link"])} key={idx}>
          <Text
            fontSize={{ base: '1.2em', md: '"1.5em"' }}
            cursor="pointer"
            color={active === key ? color.active : color.disable}
            _hover={{ color: color.active }}
            transition="all 0.2s ease-in-out"
          >
            {tabLink[key]["title"]}
          </Text>
            <Box
              width={active === key ? "100%" : "0"}
              height="5px"
              backgroundColor={color.active}
              borderRadius="3px"
              transition="all 0.2s ease-in-out"
            ></Box>
        </Box>
      ))}
    </Flex>
  );
}
