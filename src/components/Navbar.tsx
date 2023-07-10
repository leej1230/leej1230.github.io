import { Container, Flex, Text } from '@chakra-ui/react'

function Navbar() {
  return (
    <>
        <Flex as="header" position="fixed" backgroundColor="purple.100" width="100%">
            <Container>
                <Text>Jaewoo's Website</Text>
            </Container>
            <Container>
                <Text>This will be the sections</Text>
            </Container>
        </Flex>
    </>
  )
}

export default Navbar