import { Box, Flex, Grid, Image, PseudoBox, SimpleGrid, Text } from '@chakra-ui/core';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Title from '../../components/Title';
import { getAllRecipes, getSingleRecipe } from '../../lib/api';

export default function Recipe({ singleRecipe }) {
  const router = useRouter();
  const { id } = router.query;
  if (!router.isFallback && !id) {
    return <h2>Error papi</h2>;
  }
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const image = singleRecipe ? singleRecipe.image : [];
  const [first, ...others] = image;
  const images = others.map((item, i) => (
    <PseudoBox
      as={Image}
      src={item.url}
      px={{ base: '4' }}
      mx="auto"
      // p="1rem"
      objectFit="cover"
      transition="all .5s linear"
      _hover={{ transform: 'scale(1.2)' }}
      h="250px"
      w="300px"
      key={i}
      alt="gallery"
    />
  ));
  const { published } = singleRecipe || '';
  const goodTime = Date.parse(published);

  return (
    <Grid
      mt={{ base: '1rem', md: '2rem' }}
      border={{ md: '1px solid white' }}
      borderRadius={{ md: 'md' }}
      boxShadow="lg"
      // alignContent="center"
      // justifyItems="center"
      gap="1.5rem"
      templateColumns="1fr"
      justifyContent={{ base: 'center' }}
      // alignItems={{ base: 'center' }}
      // px={{ base: 'auto' }}
      m={{ base: '2rem auto' }}
    >
      <Head>
        <title>{singleRecipe?.title}</title>
      </Head>

      <Title title={singleRecipe?.title} center withRow />
      <Image
        src={first?.url}
        alt={singleRecipe?.title}
        w="full"
        h={{ base: '250px', md: '400px' }}
        objectFit="cover"
        // px={{ base: '8' }}
        p={{ base: '3rem' }}
        mt={{ md: '4' }}
      />

      <Grid
        templateColumns="repeat(auto-fit, minmax(350px, 1fr))"
        justifyContent={{ base: 'center', md: 'space-between' }}
        alignItems={{ base: 'center', md: 'stretch' }}
        p={{ base: '0', md: '8' }}
        m={{ base: '8', md: '4' }}
        columnGap={2}
      >
        <Box pb={4}>
          <Flex
            justifyContent={{ base: 'center', md: 'flex-start' }}
            alignItems="center"
            pb={3}
          >
            <Image
              src="/farm.svg"
              alt="logo"
              w="4rem"
              mr={{ base: '.7rem', md: '1.5rem' }}
            />
            <Title title="ingr&eacute;dients:" withRow center />
          </Flex>

          <Box p={{ base: '0 2rem' }} mx={{ base: 'auto' }}>
            <ReactMarkdown source={singleRecipe?.ingredients} />
          </Box>
        </Box>
        <Box>
          <Flex
            justifyContent={{ base: 'center', md: 'flex-start' }}
            alignItems="center"
            pb={3}
          >
            <Image
              src="/cooking.svg"
              alt="logo"
              w="4rem"
              mr={{ base: '.7rem', md: '1.5rem' }}
            />
            <Title title="pr&eacute;paration:" withRow center />
          </Flex>

          <Box px={{ base: '2rem' }} mx={{ base: 'auto' }}>
            <ReactMarkdown source={singleRecipe?.cooking} />
          </Box>
        </Box>
      </Grid>
      <Title title="plus de photos:" withRow center />

      <Link href={singleRecipe?.url} prefetch={false}>
        <a target="_blank" rel="noopener noreferrer">
          <SimpleGrid
            minChildWidth="250px"
            spacing="1rem"
            // p="1rem"
            px={{ base: '4', md: '6' }}
            mx={{ base: 'auto' }}
            // m="0 auto"
          >
            {images}
          </SimpleGrid>
        </a>
      </Link>

      <Flex
        mb={8}
        alignItems="center"
        justifyContent="center"
        fontSize={{ base: '.8rem' }}
      >
        <Title title="publi&eacute;e le:" center />
        <Text
          fontSize={{ base: '1rem', md: '2rem' }}
          fontStyle="italic"
          textTransform="capitalize"
        >
          {goodTime &&
            new Intl.DateTimeFormat('fr', {
              dateStyle: 'long',
            }).format(goodTime)}
        </Text>
      </Flex>
    </Grid>
  );
}

Recipe.propTypes = {
  singleRecipe: PropTypes.object.isRequired,
};

export async function getStaticProps({ params }) {
  const singleRecipe = await getSingleRecipe(params.id);

  return {
    props: { singleRecipe },
  };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const recipes = await getAllRecipes();
  return {
    paths: recipes.map(recipe => `/recettes/${recipe.id}`) || [],
    fallback: true,
  };
}
