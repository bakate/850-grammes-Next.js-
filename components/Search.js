/* eslint-disable react/display-name */
import { Box, IconButton, Image, Input, InputGroup, InputRightElement, PseudoBox, useColorMode } from '@chakra-ui/core';
import Downshift, { resetIdCounter } from 'downshift';
import debounce from 'lodash.debounce';
import Router from 'next/router';
import React from 'react';
import DarkModeSwitch from './chakra/DarkModeSwitch';
import { useInfos } from './context';

const AutoComplete = () => {
  const { search, getItems } = useInfos();
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.50', dark: 'gray.900' };
  const color = { light: 'black', dark: 'white' };

  const handleChange = item => {
    Router.push(`/recettes/${item.id}`);
  };

  const findRecipes = query => {
    if (!query) return;
    getItems(query);
  };

  const findItemsButSlowly = debounce(findRecipes, 250);
  resetIdCounter();
  return (
    <Box
      justifySelf={{ base: 'stretch', md: 'center' }}
      position="relative"
      p={{ base: '1.8rem' }}
    >
      <DarkModeSwitch />
      <Downshift
        onChange={handleChange}
        itemToString={item => (item === null ? '' : item.title)}
      >
        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          highlightedIndex,
        }) => (
          <div>
            <InputGroup size="md">
              <Input
                variant="filled"
                textAlign="center"
                {...getInputProps({
                  type: 'search',
                  id: 'search',
                  placeholder: 'Une Recette ?',
                  onChange: e => {
                    e.persist();
                    findItemsButSlowly(e.target.value);
                  },
                })}
              />
              <InputRightElement width="5rem">
                <IconButton
                  variantColor="orange"
                  size="md"
                  ml={10}
                  aria-label="Search database"
                  icon="search"
                />
              </InputRightElement>
            </InputGroup>
            {isOpen && (
              <Box
                pos="absolute"
                width="full"
                zIndex="2"
                border="1px solid"
                // borderColor="gray.100"
                bg={bgColor[colorMode]}
              >
                {search?.map((item, index) => {
                  const { image } = item;
                  const [firstImage] = image;
                  return (
                    <PseudoBox
                      {...getItemProps({ item })}
                      color={color[colorMode]}
                      key={item.id}
                      p={4}
                      borderBottom="2px solid"
                      borderColor="gray.100"
                      bg={
                        index === highlightedIndex
                          ? 'gray.400'
                          : 'bgColor[colorMode]'
                      }
                      _hover={{ transition: 'all .3s ease-in-out' }}
                      display="flex"
                      alignItems="center"
                      paddingLeft={index === highlightedIndex ? '2rem' : null}
                      borderLeft="10px solid"
                      borderLeftColor={
                        index === highlightedIndex
                          ? 'gray.400'
                          : 'bgColor[colorMode]'
                      }
                      cursor={index === highlightedIndex ? 'pointer' : null}
                    >
                      <Image
                        mr={4}
                        width="50px"
                        h="50px"
                        src={firstImage.url}
                        alt={item.title}
                        objectFit="cover"
                      />
                      {item.title}
                    </PseudoBox>
                  );
                })}

                {inputValue.length > 1 && !search.length > 0 && (
                  <PseudoBox
                    borderBottom="2px solid"
                    borderColor="gray.100"
                    bg={bgColor[colorMode]}
                    color={color[colorMode]}
                    p={4}
                    transition="all .3s ease-in-out"
                    display="flex"
                    alignItems="center"
                    flexWrap="wrap"
                    borderLeft="10px solid"
                  >
                    Ohh! Pas encore de recette pour: <b>{inputValue}</b>
                  </PseudoBox>
                )}
              </Box>
            )}
          </div>
        )}
      </Downshift>
    </Box>
  );
};

export default AutoComplete;
