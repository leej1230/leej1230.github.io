import { Center, Container, Heading } from '@chakra-ui/react';
import { Chrono } from "react-chrono";
import Iframe from 'react-iframe'

const history = [
  {
    date: new Date('2001-12-30'),
    cardTitle: "Birthday",
    cardDetailedText: "Born in Tokyo, Japan"
  },
  {
    date: new Date('2006'),
    cardTitle: "Live in US",
    cardDetailedText: "Lived in Pittsburgh, Pennsylvania for an year"
  },
  {
    date: new Date('2016-04-15'),
    cardTitle: "Joined Ritsumeikan Uji HS",
    cardDetailedText: "Pursued IB(International Baccalaureate) diploma and High school diploma. Took Math, Physics, Chemistry for HL and English B, Business, Japanese A for SL"
  },
  {
    date: new Date('2017'),
    cardTitle: "Won Outstanding Performance Award in 4th Shinichi Hoshi novel competition",
    cardDetailedText: "Wrote a short novel in Japanese. https://hoshiaward.nikkei.co.jp/archive/no4/index.html"
  },
  {
    date: new Date('2019-11-29'),
    cardTitle: "Participated IYRC(International Young Researcher's Conference) Tokyo",
    cardDetailedText: "Submitted and presented my paper regarding history of mathematics. https://past.the-iyrc.org/iyrc-2019.html"
  },
  {
    date: new Date('2020-03-15'),
    cardTitle: "Graduated Ritsumeikan Uji HS",
    cardDetailedText: "Received IB Diploma"
  },
  {
    date: new Date('2020-09-01'),
    cardTitle: "Joined UC Davis",
    cardDetailedText: "Freshman was entirely done in Japan because of COVID"
  },
  {
    date: new Date('2023-06-15'),
    cardTitle: "Graduated UC Davis",
    cardDetailedText: "Graduated UC Davis in 3 years with Computer Science degree"
  },
  {
    date: new Date('2023-06-16'),
    cardTitle: "My Next Journey",
    cardDetailedText: "Coming Soon..."
  },
]

function Timeline() {
  return (
    <>
        <Container paddingTop='1rem' minHeight="100vh" minWidth="100%" id='Timeline'>
          <Heading>My History of Journey</Heading>
          <Chrono items={history} mode="HORIZONTAL"/>
          <Heading margin='1rem'>My Resume</Heading>
          <Center height='70vh' paddingBottom='1rem'>
            <Iframe url="/Jaewoo_Lee_JPResume.pdf" width="80%" height="100%"/>
          </Center>
          
        </Container>
    </>
  )
}

export default Timeline