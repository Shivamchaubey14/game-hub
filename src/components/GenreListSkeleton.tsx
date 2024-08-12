import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <List>
      {skeletons.map((skeleton) => (
        <ListItem key={skeleton} paddingY="5px">
          <HStack>
            <Skeleton
              boxSize="32px"
              borderRadius={8}
              marginY="4px"
              marginX="4px"
            />
            <SkeletonText noOfLines={1} width="100px" />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
