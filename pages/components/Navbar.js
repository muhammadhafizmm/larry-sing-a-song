import { Box, Flex, Text } from "@chakra-ui/react";
import { color } from "../../styles/utils";
import { SearchIcon } from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <Flex justifyContent="space-between" alignItems="center" padding="1.5em 3em">
      <Text fontSize="2.5em" cursor="pointer">Larry</Text>
      <Flex
        padding=".6em 1.3em;"
        width="265px"
        justifyContent="space-between"
        backgroundColor="white"
        height="fit-content"
        alignItems="center"
        borderRadius="50px"
        cursor="pointer"
      >
        <Text fontSize="1em" color={color.active}>
          search artist/track
        </Text>
        <SearchIcon w="24px" h="24px" color={color.active} />
      </Flex>
    </Flex>
  );
}
