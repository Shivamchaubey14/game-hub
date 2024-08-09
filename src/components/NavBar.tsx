import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { px } from "framer-motion";
const NavBar = () => {
  return (
    <div>
      <HStack justifyContent={"space-between"} padding={"20px"}>
        <Image src={logo} boxSize="60px" />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
