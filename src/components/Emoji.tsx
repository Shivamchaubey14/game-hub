import React from "react";
import shocked from "../assets/shocked.webp";
import yay from "../assets/shocked.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import { ImageProps, Image } from "@chakra-ui/react";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: yay, alt: "yay", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: shocked, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={4} />;
};

export default Emoji;
