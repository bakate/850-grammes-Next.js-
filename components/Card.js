import { Box, Flex, Image, PseudoBox, Text } from '@chakra-ui/core';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import Title from './Title';

const Card = ({ image, title, id, duration, category }) => {
  let secondsLeft = duration * 60; // to convert minutes within seconds
  const hours = Math.floor(secondsLeft / 3600); // to get hours the ~~ is equal to Math.floor
  secondsLeft %= 3600; // to get the remaining minutes
  const minutes = Math.floor(secondsLeft / 60);

  // const getDuration = secondsLeft=> {
  //   const hours = Math.floor(secondsLeft / 3600);
  //   secondsLeft %= 3600;
  //   const minutes = Math.floor(secondsLeft / 60);
  //   secondsLeft %= 60;
  //   console.log(hours, minutes, secondsLeft);

  // }

  const [firstImage] = image;
  return (
    <Flex
      border="1px solid gray.50"
      borderRadius="md"
      boxShadow="md"
      transition="all .3s ease-in-out"
      pos="relative"
      flexDir="column"
      px={{ base: '2' }}
    >
      <Link href="/recettes/[id]" as={`/recettes/${id}`}>
        <PseudoBox
          _hover={{
            cursor: 'pointer',
            opacity: '.7',
          }}
        >
          <Title title={title} center />
          <Image
            w="full"
            h="300px"
            objectFit="cover"
            transition="all .3s ease-in-out"
            src={firstImage.url}
            alt={title}
          />
        </PseudoBox>
      </Link>

      <Box>
        {hours >= 1 && (
          <Text>
            <b>{hours}</b> <span>heure{hours > 1 ? 's' : ''}</span>
            {hours >= 1 && minutes > 0 && <span> et </span>}
            {minutes > 0 && (
              <>
                <b>{minutes}</b>
                <span> minutes</span>
              </>
            )}
          </Text>
        )}

        {category && (
          <Text>
            Niveau de Difficult&eacute;: {category?.difficulty} 💪💪
          </Text>
        )}
      </Box>
    </Flex>
  );
};

Card.propTypes = {
  category: PropTypes.object,
  duration: PropTypes.number,
  id: PropTypes.string.isRequired,
  image: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
export default Card;
