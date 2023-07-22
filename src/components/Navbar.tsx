import { Flex, HStack, Link, Text, useColorModeValue } from '@chakra-ui/react';
import {Link as Scroll} from 'react-scroll';
// import { ReactNode } from 'react';

const NavItems:string[] = [
  'Home',
  'Timeline',
  'Projects',
  'Tools',
];

const NavLink = ({ children }: { children: string }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    <Scroll to={children} smooth offset={-60}>
      {children}
    </Scroll>
  </Link>
);

function Navbar() {

  return (
    <>
        <Flex as="header" position="fixed" backgroundColor="purple.100" width="100%" py="3" justifyContent="space-between" zIndex="999" height="60px">
            <Flex mx="2" justifyContent="center">
                <Text paddingLeft='2' py="1" as='b'>Jaewoo's Website</Text>
            </Flex>
            <Flex mx="2" justifyContent="center">
                <HStack align="center" mx="2">
                  {NavItems.map((NavItem) => (
                    <NavLink key={NavItem}>{NavItem}</NavLink>
                  ))}
                </HStack>
            </Flex>
        </Flex>
    </>
  )
}

export default Navbar