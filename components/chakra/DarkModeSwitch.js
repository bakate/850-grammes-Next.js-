import { IconButton, useColorMode } from '@chakra-ui/core';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      position="fixed"
      rounded="full"
      top="1rem"
      right=".8rem"
      color={colorMode === 'light' ? 'black' : 'white'}
      icon={colorMode === 'light' ? 'moon' : 'sun'}
      onClick={toggleColorMode}
    />
  );
};

export default DarkModeSwitch;
