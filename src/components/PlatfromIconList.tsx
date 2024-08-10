import {} from 'react-icons/fa';
import { Platform } from "../hooks/useGames";
import { Text } from "@chakra-ui/react";
interface Props {
  platforms: Platform[];
}

const PlatfromIconList = ({ platforms }: Props) => {
  return (
    <>
      {platforms.map((platform) => (
        <Text>{platform.name}</Text>
      ))}
    </>
  );
};

export default PlatfromIconList;
