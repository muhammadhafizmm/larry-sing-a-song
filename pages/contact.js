import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import ContactImage from "../public/contact.png";
import Instagram from "../public/instagram.png";
import Github from "../public/github.png";
import Linkedin from "../public/linkedin.png";
import color from "../utils/color";
import TabLink from "./components/TabLink";

export default function Contact() {
  return (
    <Flex
      minH="calc(100vh - 40px - (32px * 2) - (24px * 4))"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Flex position="relative" left={{ base: "0px", md: "-50px" }}>
        <Box zIndex="2" position="relative">
          <Box position="relative">
            <Text fontSize={{ base: "2em", md: "4em" }}>Lets Connect</Text>
            <Text fontSize={{ base: "2em", md: "4em" }}>with Me!</Text>
            <Flex position="absolute" right={{ base: "-36px", md: "-80px" }} bottom={{ base: "-4px", md: "5px" }}>
              <Link href="https://www.linkedin.com/in/muhammadhafizm/">
                <Image src={Linkedin.src} boxSize={{ base: "60px", md: "80px" }}></Image>
              </Link>
              <Link marginLeft={{ base: "-10px", md: "-15px" }} href="https://www.instagram.com/muhammadhafizm/">
                <Image
                  src={Instagram.src}
                  boxSize={{ base: "60px", md: "80px" }}
                ></Image>
              </Link>
              <Link marginLeft={{ base: "-10px", md: "-15px" }} href="https://github.com/muhammadhafizmm">
                <Image
                  src={Github.src}
                  boxSize={{ base: "60px", md: "80px" }}
                ></Image>
              </Link>
            </Flex>
          </Box>
          <Text>
            Icon copywright @{" "}
            <Link href="https://iconscout.com" color={color.active}>
              iconscout.com
            </Link>
          </Text>
        </Box>
        <Image
          position="absolute"
          w={{ base: "300px", md: "500px" }}
          bottom={{ base: "15px", md: "40px" }}
          right={{ base: "-30px", md: "-150px" }}
          src={ContactImage.src}
        ></Image>
      </Flex>
      <TabLink></TabLink>
    </Flex>
  );
}
