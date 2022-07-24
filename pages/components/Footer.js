import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import color from "../../utils/color";

export default function Footer() {
  const router = useRouter();
  return (
    <Flex
      backgroundColor={color.bg}
      justifyContent="end"
      padding={{ base: "2em 2em", md: "1.5em 3em" }}
      width="100%"
    >
      <Text
        cursor="pointer"
        padding="0"
        margin="0"
        fontSize={{ base: "1.5em", md: "2em" }}
        onClick={() => router.push("/contact")}
      >
        Connect
      </Text>
    </Flex>
  );
}
