import { Card, CardBody, CardFooter, Container, Flex, HStack, Heading, Image, Link, SimpleGrid, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import rawdata from './projects.json';
import { Github } from "@chakra-icons/bootstrap";

interface Project{
    "title": string,
    "description": string,
    "thumbnail": string,
    "githubLink": string,
    "demoLink": string
}

const projectArray:Project[] = rawdata as Project[];

const ProjectCard = ({ children }: { children: Project }) => (
    <Card maxW='sm'>
        <CardBody>
            <Image objectFit="cover" src={children.thumbnail} />
            <Stack mt='6' spacing='3'>
                <Heading size='md'>
                    {children.title}
                </Heading>
                <Text>
                    {children.description}
                </Text>
            </Stack>
        </CardBody>
        <CardFooter>
            <HStack alignContent="center">
                <Link
                    px={2}
                    py={1}
                    rounded={'md'}
                    textAlign="center"
                    _hover={{
                        textDecoration: 'none',
                        bg: useColorModeValue('gray.200', 'gray.700'),
                    }}
                    href={children.githubLink}>
                    <Github />
                </Link>
                <Link
                    px={2}
                    py={1}
                    rounded={'md'}
                    textAlign="center"
                    _hover={{
                        textDecoration: 'none',
                        bg: useColorModeValue('gray.200', 'gray.700'),
                    }}
                    href={children.demoLink}>
                        Demo
                </Link>
            </HStack>
        </CardFooter>
    </Card>
);

function Projects() {
    return (
        <Container minHeight="100vh" minWidth="100%" bg="green.100" id="Projects">
            <Heading>
                This is Projects Section
            </Heading>
            <Flex justifyContent="center">
                <SimpleGrid columns={2} spacing={10}>
                    {projectArray.map((project) => (
                        <ProjectCard key={project.title}>{project}</ProjectCard>
                    ))}
                </SimpleGrid>
            </Flex>
        </Container>
      )
}

export default Projects