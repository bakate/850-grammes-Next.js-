import { IconButton, useColorMode } from '@chakra-ui/core';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      position="fixed"
      size="sm"
      top=".4rem"
      right=".8rem"
      variant="solid"
      variantColor="orange"
      aria-label="toggle color"
      color={colorMode === 'light' ? 'black' : 'white'}
      icon={colorMode === 'light' ? 'moon' : 'sun'}
      onClick={toggleColorMode}
    />
  );
};

export default DarkModeSwitch;
