import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { px } from "framer-motion";
import SearchInput from "./SearchInput";
const NavBar = () => {
  return (
    <div>
      <HStack padding={"20px"}>
        <Image src={logo} boxSize="60px" />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
