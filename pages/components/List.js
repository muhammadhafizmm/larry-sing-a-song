import {
  Box,
  Flex,
  Text,
  VStack,
  StackDivider,
  Skeleton,
} from "@chakra-ui/react";

export function List({ data }) {
  const convertLongString = (str) => {
    return str && str.length > 22 ? str.slice(0, 25) + "..." : str;
  };
  // Build Skeleton
  const skeletonList = () => {
    const component = [];
    for (let i = 0; i < 6; i++) {
      component.push(
        <Flex w={{ base: "80vw", md: "500px" }} key={i}>
          <Flex justifyContent="center" alignItems="center" marginRight="1em">
            <Text fontSize={{ base: "1em", sm: "1.2em", md: "1.5em" }}>{i+1}.</Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            width="inherit"
          >
            <Skeleton w="50%" h={{ base: "1em", sm: "1.2em", md: "1.5em" }}></Skeleton>
            <Skeleton width="32px" height="32px" borderRadius="8px"></Skeleton>
          </Flex>
        </Flex>
      );
    }
    return component
  };
  return (
    <VStack
      divider={
        <StackDivider
          border={"2px solid"}
          borderRadius="2px"
          borderColor="gray.100"
        />
      }
      spacing=".8em"
      align="stretch"
    >
      {data && data.length ? (
        data.map((item, idx) => (
          <Flex w={{ base: "80vw", md: "500px" }} key={idx}>
            <Flex justifyContent="center" alignItems="center" marginRight="1em">
              <Text fontSize={{ base: "1em", sm: "1.2em", md: "1.5em" }}>{idx + 1}.</Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              width="inherit"
            >
              <Text fontSize={{ base: "1em", sm: "1.2em", md: "1.5em" }}>{convertLongString(item.name)}</Text>
              <Box width="32px" height="32px"  borderRadius="8px" backgroundColor="gray.100"></Box>
              {/* API not provide image, always use same image */}
              {/* <Image
                src={item.image[0]["#text"]}
                width="32px"
                height="32px"
                borderRadius="8px"
              ></Image> */}
            </Flex>
          </Flex>
        ))
      ) : (skeletonList())}
    </VStack>
  );
}
