import { Flex, Box, Text, Input } from "@chakra-ui/react";
import { useState } from "react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import color from "../../utils/color";

export default function Search({ setQuery }) {
  const [type, setType] = useState("Artist");
  const [keyword, setKeyword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex w={{ base: '80vw', md: '500px' }}>
      <Box position="relative">
        <Flex
          backgroundColor={color.primary}
          position="relative"
          padding=".5em .7em"
          borderRadius="1em"
          onClick={() => setIsOpen(!isOpen)}
          zIndex="3"
          cursor="pointer"
          width={{ base: '80px', md: '100px' }}
          justifyContent="space-between"
        >
          <Text color={color.active} margin=".1em"
            fontSize={{ base: '.8em', md: '1em' }}
          >
            {type}
          </Text>
          <ChevronDownIcon
            w={{ base: '1.2em', md: '1.5em' }}
            h={{ base: '1.2em', md: '1.5em' }}
            transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
            transition="all .2s"
            color={color.active}
          ></ChevronDownIcon>
        </Flex>
        <Text
          color={color.active}
          position="absolute"
          bottom= {{ base: isOpen ? "calc(-.9em + -2em)" : "4px" , md: isOpen ? "calc(-.9em + -2em)" : "0" }}
          padding=".5em 1em"
          borderRadius="1em"
          fontSize={{ base: '.8em', md: '1em' }}
          left="0"
          backgroundColor={color.primary}
          transition="all .2s ease-in-out"
          onClick={() => {
            setIsOpen(false);
            // Set time out for set query smoothly after transition done
            setTimeout(() => {
              setType(type === "Artist" ? "Track" : "Artist");
              setKeyword("");
              setQuery({
                type: type === "Artist" ? "Track" : "Artist",
                keyword: "",
              });
            }, 200);
          }}
        >
          {type === "Artist" ? "Track" : "Artist"}
        </Text>
      </Box>
      <Box width="inherit" position="relative">
        <Input
          backgroundColor={color.primary}
          padding={{ base: ".6em 1em", md: ".6em .8em" }}
          marginLeft={{ base: '.7em', md: '1em' }}
          borderRadius={{ base: '1.2em', md: '1em' }}
          border="none"
          width="calc(100% - 1em)"
          placeholder="Search . . ."
          fontSize={{ base: '.9em', md: '1em' }}
          color={color.active}
          _focus={{ outlineColor: color.active, borderColor: "none" }}
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            setQuery({ type: type, keyword: e.target.value });
          }}
        ></Input>
        <SearchIcon
          w={{ base: '1.2em', md: '1.5em' }}
          h={{ base: '1.2em', md: '1.5em' }}
          color={color.active}
          position="absolute"
          right={{ base: "1em", md: ".8em" }}
          top=".6em"
        />
      </Box>
    </Flex>
  );
}
