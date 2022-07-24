import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { color } from "../../styles/utils";
import { SearchIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const router = useRouter();
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      padding={{ base: '2em 2em', md: "1.5em 3em" }}
    >
      <Text fontSize={{ base: '1.5em', md: "2.5em" }} cursor="pointer" onClick={() => router.push("/")}>
        Larry
      </Text>
      <Flex
        padding={{ base: '.3em .7em', md: ".6em 1.4em" }}
        justifyContent="space-between"
        backgroundColor="white"
        height="fit-content"
        alignItems="center"
        borderRadius="50px"
        cursor="pointer"
        onClick={() => router.push("/list/search")}
      >
        <SearchIcon w={{ base: '18px', md: "24px" }} h={{ base: '18px', md: "24px" }} color={color.active} />
      </Flex>
    </Flex>
  );
}
