import { Github, Linkedin } from "@chakra-icons/bootstrap";
import { EmailIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, LinkBox, LinkOverlay, Text, chakra } from "@chakra-ui/react";

function Footer() {
  return (
    <>
        <chakra.footer py={4} bgColor='blackAlpha.500' color={'white'}>
            <Flex direction='column' alignItems='center' minHeight="20vh" h='full'>
                <Box>
                    <Text as='b'>
                        CONTACT ME
                    </Text>
                </Box>

                <Box marginY='1rem'>
                    <HStack>
                        <LinkBox>
                            <Box maxW='sm' borderWidth='1px' borderColor='white' borderRadius='lg' p='3' _hover={{ bg: "gray" }}>
                                <LinkOverlay href='https://github.com/leej1230' target="_blank">
                                    <Github boxSize="2rem" />
                                </LinkOverlay>
                            </Box>
                        </LinkBox>
                        
                        <LinkBox>
                            <Box maxW='sm' borderWidth='1px' borderColor='white' borderRadius='lg' p='3' _hover={{ bg: "gray" }}>
                                <LinkOverlay href='https://www.linkedin.com/in/jaewoolee1230/' target="_blank">
                                    <Linkedin boxSize="2rem" />
                                </LinkOverlay>
                            </Box>
                        </LinkBox>

                        <LinkBox>
                            <Box maxW='sm' borderWidth='1px' borderColor='white' borderRadius='lg' p='3' _hover={{ bg: "gray" }}>
                                <LinkOverlay href='mailto:leejaewoo1230@gmail.com'>
                                    <EmailIcon boxSize="2rem" />
                                </LinkOverlay>
                            </Box>
                        </LinkBox>
                    </HStack>
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