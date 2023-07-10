import { Container, Heading, Text } from '@chakra-ui/react'
import { Chrono } from "react-chrono"

const history = [
  {
    date: new Date('2001-12-30'),
    cardTitle: "Birthday",
    cardDetailedText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illo nesciunt blanditiis expedita totam debitis voluptates officiis nulla, aliquam iusto consequuntur, aliquid autem deleniti temporibus, ut ad est? Doloribus, odit!"
  },
  {
    date: new Date('2020-09-01'),
    cardTitle: "Joined UC Davis",
    cardDetailedText: "Pursued Computer Engineer"
  },
  {
    date: new Date('2023-06-15'),
    cardTitle: "Graduated UC Davis",
    cardDetailedText: "Graduated UC Davis in 3 years with Computer Science degree"
  },
  {
    date: new Date('2023-06-15'),
    cardTitle: "Graduated UC Davis",
    cardDetailedText: "Graduated UC Davis in 3 years with Computer Science degree"
  },
  {
    date: new Date('2023-06-15'),
    cardTitle: "Graduated UC Davis",
    cardDetailedText: "Graduated UC Davis in 3 years with Computer Science degree"
  },
  {
    date: new Date('2023-06-15'),
    cardTitle: "Graduated UC Davis",
    cardDetailedText: "Graduated UC Davis in 3 years with Computer Science degree"
  },
]

function Timeline() {
  return (
    <>
        <Container minHeight="100vh" minWidth="100%" bg="blue.100">
            <Heading>
                This is Timeline Section
            </Heading>
              <Chrono items={history} mode="HORIZONTAL"/>
            {/* <Chrono items={history} mode="VERTICAL" /> */}
        </Container>
    </>
  )
}

export default Timeline