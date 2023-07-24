import { Container, Heading, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import Devices from "./Devices"
import Languages from "./Languages"
import Programming from "./Programming"

const tabElements: JSX.Element[] = [
  <Languages/>,
  <Programming/>,
  <Devices/>,
]

function Tools() {
  return (
    <Container minHeight="100vh" minWidth="100%" id="Tools">
        <Heading>
            My Tools
        </Heading>

        <Tabs isFitted>
          <TabList>
            <Tab>Languages</Tab>
            <Tab>Frameworks / Tools</Tab>
            <Tab>Devices</Tab>
          </TabList>
          <TabIndicator mt="-1.5px" height="2px" borderRadius="1px" />
          <TabPanels>
            {
              tabElements.map((tabElement) => (
                <TabPanel>
                  {tabElement}
                </TabPanel>
              ))
            }
          </TabPanels>
        </Tabs>
    </Container>
  )
}

export default Tools