import { Github, Linkedin } from '@chakra-icons/bootstrap';
import { EmailIcon } from '@chakra-ui/icons';
import { Box, Container, HStack, Heading, Image, LinkBox, LinkOverlay, Stack } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const intros:string[] = [
    "Passionate Programmer",
    "UC Davis Alumni",
    "Python Enthusiast",
    "Engineer at teamLab"
]

function Home() {

    const [intro,setIntro] = useState<string>("Passionate Programmer");
    const [index,setIndex] = useState<number>(0);

    const updateIntro = useCallback(() => {
        let currIndex:number = index;
        let nextIndex:number = index;
        while (currIndex === nextIndex) {
            nextIndex = Math.floor(Math.random() * intros.length);
        }
        setIndex(nextIndex);
        setIntro(intros[nextIndex]);
    }, [index]);

    useEffect(() => {
        const intervalID = setInterval(updateIntro, 3500);
        return () => clearInterval(intervalID);
    }, [updateIntro])

    return (
    <>
        <Container minHeight="100vh" minWidth="100%" paddingTop='60px' id='Home'>
            <Stack marginTop='10%' direction={["column","row"]} justifyContent='center' align="center">
                <Box width={['100%', '50%']}>
                    <Heading>
                        Hello there 👋
                    </Heading>
                    <Heading>
                        This is Jaewoo Lee
                    </Heading>
                    <HStack>
                        <Heading>
                            a
                        </Heading>
                        <Heading>
                            <TextTransition springConfig={presets.wobbly}>{intro}</TextTransition>
                        </Heading>
                    </HStack>
                    <HStack marginTop='1.2rem'>
                        <LinkBox>
                            <Box maxW='sm' borderWidth='1px' borderRadius='lg' p='3' bg="green.100" _hover={{ bg: "blue.100" }}>
                                <LinkOverlay href='https://github.com/leej1230' target="_blank">
                                    <Github boxSize="2rem" />
                                </LinkOverlay>
                            </Box>
                        </LinkBox>
                        
                        <LinkBox>
                            <Box maxW='sm' borderWidth='1px' borderRadius='lg' p='3' bg="green.100" _hover={{ bg: "blue.100" }}>
                                <LinkOverlay href='https://www.linkedin.com/in/jaewoolee1230/' target="_blank">
                                    <Linkedin boxSize="2rem" />
                                </LinkOverlay>
                            </Box>
                        </LinkBox>

                        <LinkBox>
                            <Box maxW='sm' borderWidth='1px' borderRadius='lg' p='3' bg="green.100" _hover={{ bg: "blue.100" }}>
                                <LinkOverlay href='mailto:leejaewoo1230@gmail.com'>
                                    <EmailIcon boxSize="2rem" />
                                </LinkOverlay>
                            </Box>
                        </LinkBox>
                    </HStack>
                    
                </Box>
                <Box position="relative" boxSize="sm">
                    <Image objectFit="cover" position="absolute" zIndex="1" boxSize="100%" objectPosition="top" src='/img/portrait.png' alt='Jaewoo Portrait' />
                    <Box height="70%" position="absolute" width="50%" top="5%" right="10%" bgColor="green.100"/>
                </Box>

            </Stack>
        </Container>
    </>
  )
}

export default Home
