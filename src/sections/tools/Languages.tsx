import { Box, Center, Divider, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { US,JP,KR } from 'country-flag-icons/react/3x2';
import rawdata from "./everything.json";
import "devicon";

interface CardContent{
    icon: string
    language: string
}

const progLangs: CardContent[] = rawdata.languages as CardContent[];

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

type VerbLangProps = {
    IconCountry: JSX.Element,
    language: string
}
const VerbLangBox: React.FC<VerbLangProps> = (verbLangProp) => {
    const { IconCountry, language } = verbLangProp
    return (
        <Box maxW='10rem' p='1.5' borderWidth='1px' borderRadius='lg' bg='blue.200' _hover={{bg:'transparent', transitionDuration:'0.3s'}}>
            <Center>
                <Stack>
                    <Flex h='4rem' textAlign='center'>
                        {IconCountry}
                    </Flex>
                    <Box textAlign='center' fontWeight='semibold'>{language}</Box>
                </Stack>
            </Center>
        </Box>
    )
}

function Languages() {
  return (
    <>
        <Heading>Programming Languages</Heading>
        <Divider marginY={1} borderWidth={'0.1rem'} borderColor={'black'}/>
        <SimpleGrid columns={[1,2,3,4]} spacing={10} paddingX='5%'>
            {
                progLangs.map((progLang) => (
                    <ProgLangBox key={progLang.language}>{progLang}</ProgLangBox>
                ))
            }
        </SimpleGrid>
        
        <Heading>Verbal Languages</Heading>
        <Divider marginY={1} borderWidth={'0.1rem'} borderColor={'black'}/>
        <SimpleGrid columns={[1,2,3]} spacing={10} paddingX='5%'>
            <VerbLangBox IconCountry={<US/>} language='English'></VerbLangBox>
            <VerbLangBox IconCountry={<JP/>} language='Japanese'></VerbLangBox>
            <VerbLangBox IconCountry={<KR/>} language='Korean'></VerbLangBox>
        </SimpleGrid>
        {/* <link rel="stylesheet" href="devicon.min.css"></link> */}
    </>
  )
}

export default Languages