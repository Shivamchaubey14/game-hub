import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading } = useGenres();

  if (isLoading) return <GenreListSkeleton />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>  
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
              marginY={"4px"}
              marginX={"4px"}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
