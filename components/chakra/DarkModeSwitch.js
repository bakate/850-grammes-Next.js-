import { IconButton, useColorMode } from '@chakra-ui/core';
import { useInfos } from '../context';

const DarkModeSwitch = () => {
  const { height } = useInfos();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      position="fixed"
      size="sm"
      rounded="full"
      opacity={height > 100 ? '1' : '0'}
      top=".4rem"
      right=".8rem"
      zIndex="tooltip"
      variant="solid"
      mb={{ base: '2' }}
      variantColor="orange"
      aria-label="toggle color"
      color={colorMode === 'light' ? 'black' : 'white'}
      icon={colorMode === 'light' ? 'moon' : 'sun'}
      onClick={toggleColorMode}
    />
  );
};

export default DarkModeSwitch;
