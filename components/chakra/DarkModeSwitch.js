import { IconButton, useColorMode } from '@chakra-ui/core';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      // position="fixed"
      size="sm"
      rounded="full"
      // top={{ base: '4.1rem', md: '.4rem' }}
      // right={{ base: '3.3rem', md: '.8rem' }}
      zIndex="tooltip"
      variant="solid"
      mb={2}
      variantColor="orange"
      aria-label="toggle color"
      color={colorMode === 'light' ? 'black' : 'white'}
      icon={colorMode === 'light' ? 'moon' : 'sun'}
      onClick={toggleColorMode}
    />
  );
};

export default DarkModeSwitch;
