import { Box, Divider, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import rawdata from "./everything.json";
import "devicon";

interface CardContent{
  icon: string
  language: string
}

const frontends: CardContent[] = rawdata.frameworks.frontend as CardContent[];
const backends: CardContent[] = rawdata.frameworks.backend as CardContent[];
const others: CardContent[] = rawdata.frameworks.other as CardContent[];

const ProgLangBox = ({children}: {children: CardContent}) => (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg'>
        <Stack>
                <i className={children.icon}></i>
                <Box fontWeight='semibold'>{children.language}</Box>
        </Stack>
    </Box>
)

function Programming() {
  return (
    <>
        <Heading>Frontend Frameworks</Heading>
        <Divider/>
        <SimpleGrid columns={2}>
            {
                frontends.map((frontend) => (
                    <ProgLangBox key={frontend.language}>{frontend}</ProgLangBox>
                ))
            }
        </SimpleGrid>
        
        <Heading>Backend Frameworks</Heading>
        <Divider/>
        <SimpleGrid columns={2}>
            {
                backends.map((backend) => (
                    <ProgLangBox key={backend.language}>{backend}</ProgLangBox>
                ))
            }
        </SimpleGrid>

        <Heading>Other Tools</Heading>
        <Divider/>
        <SimpleGrid columns={2}>
            {
                others.map((other) => (
                    <ProgLangBox key={other.language}>{other}</ProgLangBox>
                ))
            }
        </SimpleGrid>
    </>
  )
}

export default Programming