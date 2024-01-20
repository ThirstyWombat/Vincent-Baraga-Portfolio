import { Tabs } from "@mantine/core";

function Navigation() {
  return (
    <Tabs defaultValue="About Me">
      <Tabs.List justify="center">
        <Tabs.Tab value="About Me">About Me</Tabs.Tab>
        <Tabs.Tab value="Portfolio">Portfolio</Tabs.Tab>
        <Tabs.Tab value="Contact">Contact</Tabs.Tab>
        <Tabs.Tab value="Resume">Resume</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}

export default Navigation;
