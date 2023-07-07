import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'

function Home() {
  return (
    <>
        <Container minHeight="100vh" minWidth="100%" bg="red.100">
            <Heading>
                This is Landing Section
            </Heading>
            <Container>
                <Stack direction="column" align="center">
                    <Box position="relative" boxSize="sm">
                        <Image objectFit="cover" position="absolute" zIndex="1" boxSize="100%" objectPosition="top" src='/img/portrait.png' alt='Jaewoo Portrait' />
                        <Box height="70%" position="absolute" width="50%" top="5%" right="10%" bgColor="green.100"/>
                    </Box>
                    <Heading>
                        Hello there 👋
                    </Heading>
                    <Heading>
                        This is Jaewoo Lee
                    </Heading>
                    <Heading>
                        a Passionate Programmer
                    </Heading>
                </Stack>
            </Container>

        </Container>
    </>
  )
}

export default Home