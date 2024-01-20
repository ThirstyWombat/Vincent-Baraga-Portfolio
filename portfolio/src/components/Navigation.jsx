import { Tabs } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  //use current page to fix the default tab not changing on refresh
  const currentPage = useLocation().pathname;
  return (
    <Tabs defaultValue="About Me">
      <Tabs.List justify="center">
        <Link to="/">
          <Tabs.Tab value="About Me">About Me</Tabs.Tab>
        </Link>
        <Link to="/Portfolio">
          <Tabs.Tab value="Portfolio">Portfolio</Tabs.Tab>
        </Link>
        <Link to="/Contact">
          <Tabs.Tab value="Contact">Contact</Tabs.Tab>
        </Link>
        <Link to="/Resume">
          <Tabs.Tab value="Resume">Resume</Tabs.Tab>
        </Link>
      </Tabs.List>
    </Tabs>
  );
}

export default Navigation;
