import { Flex, Box, Text, Image } from "@chakra-ui/react";
import TikTokImage from "../public/tiktok-logo.png";
import MonalisaImage from "../public/monalisa.png";
import TabLink  from "./components/TabLink";

export default function Home() {
  return (
    // This minH Base on screenSize - headerNavSize - footerSize
    <Flex
      minH="calc(100vh - 40px - (32px * 2) - (24px * 4))"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box position="relative">
        <Image
          src={TikTokImage.src}
          position="absolute"
          top={{ base: '-47px', md: "-70px" }}
          right={{ base: '-50px', md: '-95px' }}
          boxSize={{ base: '100px', md: '150px' }}
        ></Image>
        <Text fontSize={{ base: '3em', md: '5em' }}>Larry Sing</Text>
        <Box fontSize={{ base: '3em', md: '5em' }}>
          a Song{" "}
          <Text display="inline" letterSpacing="15px">
            ...
          </Text>
        </Box>
        <Image
          src={MonalisaImage.src}
          position="absolute"
          bottom={{ base: '-80px', md: "-120px" }}
          left={{ base: '-76px', md: '-140px' }}
          boxSize={{ base: '130px', md: '200px' }}
        ></Image>
      </Box>
      <TabLink />
    </Flex>
  );
}
