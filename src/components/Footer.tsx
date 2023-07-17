import { Box, Flex, Heading, Text, chakra } from "@chakra-ui/react";

function Footer() {
  return (
    <>
        <chakra.footer py={4} bgColor='blackAlpha.500' color={'white'}>
            <Flex direction='column' alignItems='center' justify='space-between' minHeight="20vh" h='full'>
                <Box >
                    <Heading>
                        This is Footer
                    </Heading>
                </Box>

                <Box>
                    <Text>
                        Will have button for LinkedIn, Email, Github
                    </Text>
                </Box>

                <Box>
                    <Text>
                        © Jaewoo's website. All rights reserved.
                    </Text>
                </Box>
            </Flex>
        </chakra.footer>
    </>
  )
}

export default Footer