import { HStack, List, ListItem, Image, Text, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
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
            <Button
              fontSize="lg"
              variant="link"
              onClick={() => onSelectGenre(genre)}
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
