import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { color } from "../styles/utils";
import TikTokImage from "../public/tiktok-logo.png";

export default function Home() {
  const tabLink = {
    "Top Track": "/",
    "Top Artist": "/",
    "Top Search": "/",
  };
  return (
    <Flex
      height="calc(100vh - 40px - (32px * 2) - (24px * 4))"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box position="relative">
        <Image
          src={TikTokImage.src}
          position="absolute"
          top="-95px"
          right="-95px"
          boxSize="150px"
        ></Image>
        <Text fontSize="5em">Larry Sing</Text>
        <Text fontSize="5em">
          a Song{" "}
          <Text display="inline" letterSpacing="15px">
            ...
          </Text>
        </Text>
      </Box>
      <Flex width="420px" justifyContent="space-between" paddingTop={"2em"}>
        {Object.keys(tabLink).map((title, key) => (
          <Text
            fontSize="1.5em"
            cursor="pointer"
            color={color.disable}
            _hover={{ color: color.active }}
            key={key}
          >
            {title}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
}
