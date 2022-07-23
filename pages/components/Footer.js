import { Flex, Text } from "@chakra-ui/react";

export default function Footer () {
    return (
        <Flex
            justifyContent="end"
            padding="1.5em 3em"
            position="absolute"
            width="100%"
            bottom="0"
        >
            <Text
                cursor="pointer"
                padding="0"
                margin="0"
                fontSize="2em"
            >Connect</Text>
        </Flex>
    )
}