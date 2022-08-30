import { ReactNode } from 'react';
import { Link as Link1 } from 'react-router-dom'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Timer', 'Other', ''];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
   >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'#f6fff8'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Link1 to='/'>
                <Image cursor='pointer' width='35px' borderRadius={'50%'} src="https://media-exp1.licdn.com/dms/image/C4D0BAQFFj9ofnI-gpA/company-logo_200_200/0/1633441317808?e=2147483647&v=beta&t=XOiIdcdoibTe98K8L2TWxWSFz_xwu7M_faCQzPVa02E" />
                </Link1>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {
                <>
                <Link1 to='/'>Home</Link1>
                <Link1 to='/timer'>Timer</Link1>
                <Link1 to='/diary'>Diary</Link1>
                {/* <Link1 to='/room-chat'>Room Chat</Link1> */}
                </>
             }
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://cdn-icons-png.flaticon.com/128/2922/2922510.png'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem><Link1 to='/login'>Log In</Link1></MenuItem>
                <MenuItem><Link1 to='/signup'>Sign up</Link1></MenuItem>
                <MenuDivider />
                <MenuItem>Sign Out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            {
                <Link1 to='/timer'>Timer</Link1>
             }
            </Stack>
          </Box>
        ) : null}
      </Box>

     
    </>
  );
}