import { Box, Center, Divider, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
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
    <Box maxW='10rem' p='1.5' borderWidth='1px' borderRadius='lg' bg='blue.200' _hover={{bg:'transparent', transitionDuration:'0.3s'}}>
        <Center>
            <Stack>
                <i className={children.icon} style={{ fontSize:'5rem', textAlign:'center' }}></i>
                <Box textAlign='center' fontWeight='semibold'>{children.language}</Box>
            </Stack>
        </Center>
    </Box>
)

function Programming() {
  return (
    <>
        <Heading>Frontend Frameworks</Heading>
        <Divider marginY={1} borderWidth={'0.1rem'} borderColor={'black'}/>
        <SimpleGrid columns={[1,2,3,4]} spacing={10} paddingX='5%'>
            {
                frontends.map((frontend) => (
                    <ProgLangBox key={frontend.language}>{frontend}</ProgLangBox>
                ))
            }
        </SimpleGrid>
        
        <Heading>Backend Frameworks</Heading>
        <Divider marginY={1} borderWidth={'0.1rem'} borderColor={'black'}/>
        <SimpleGrid columns={[1,2,3,4]} spacing={10} paddingX='5%'>
            {
                backends.map((backend) => (
                    <ProgLangBox key={backend.language}>{backend}</ProgLangBox>
                ))
            }
        </SimpleGrid>

        <Heading>Other Tools</Heading>
        <Divider marginY={1} borderWidth={'0.1rem'} borderColor={'black'}/>
        <SimpleGrid columns={[1,2,3,4]} spacing={10} paddingX='5%'>
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