import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  Heading,
  Button,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {

  const toast = useToast();

  return (
    <ChakraProvider theme={theme}>
      
      <Flex direction="column" mt="4" align="center">
        <ColorModeSwitcher justifySelf="flex-end" />
        <Box>
          <Heading>Hello world</Heading>
        </Box>
        <Button
            onClick={() =>
              toast({
                title: ` toast`,
                status: 'success',
                isClosable: true,
              })
            }
          >
            Show  toast
          </Button>
        <Spinner color='red'/>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
