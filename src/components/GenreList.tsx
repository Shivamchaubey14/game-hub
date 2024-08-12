import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGenres();

  if (isLoading) return <GenreListSkeleton />;

  return (
    <>
      <Heading marginLeft="16px" marginBottom="8px">
        Genres
      </Heading>
      <List spacing={3} marginX="16px">
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack spacing={4}>
              <Image
                objectFit={"cover"}
                boxSize="32px"
                borderRadius={8}
                src={genre.image_background}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontSize="lg"
                variant="link"
                onClick={() => onSelectGenre(genre)}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name.toUpperCase()}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
