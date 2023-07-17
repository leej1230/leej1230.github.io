import { Box, Divider, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { US,JP,KR } from 'country-flag-icons/react/3x2';
import rawdata from "./everything.json";
import "devicon";

interface CardContent{
    icon: string
    language: string
}

const progLangs: CardContent[] = rawdata.languages as CardContent[];

const ProgLangBox = ({children}: {children: CardContent}) => (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg'>
        <Stack>
                <i className={children.icon}></i>
                <Box fontWeight='semibold'>{children.language}</Box>
        </Stack>
    </Box>
)

type VerbLangProps = {
    IconCountry: JSX.Element,
    language: string
}
const VerbLangBox: React.FC<VerbLangProps> = (verbLangProp) => {
    const { IconCountry, language } = verbLangProp
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg'>
            <Stack>
                    <Box maxW='40%'>
                        {IconCountry}
                    </Box>
                    <Box fontWeight='semibold'>{language}</Box>
            </Stack>
        </Box>
    )
}

function Languages() {
  return (
    <>
        <Heading>Programming Languages</Heading>
        <Divider/>
        <SimpleGrid columns={2}>
            {
                progLangs.map((progLang) => (
                    <ProgLangBox key={progLang.language}>{progLang}</ProgLangBox>
                ))
            }
        </SimpleGrid>
        
        <Heading>Verbal Languages</Heading>
        <Divider/>
        <SimpleGrid columns={2}>
            <VerbLangBox IconCountry={<US/>} language='English'></VerbLangBox>
            <VerbLangBox IconCountry={<JP/>} language='Japanese'></VerbLangBox>
            <VerbLangBox IconCountry={<KR/>} language='Korean'></VerbLangBox>
        </SimpleGrid>
        {/* <link rel="stylesheet" href="devicon.min.css"></link> */}
    </>
  )
}

export default Languages