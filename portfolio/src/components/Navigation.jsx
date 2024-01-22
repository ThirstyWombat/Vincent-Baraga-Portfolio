import { Tabs } from "@mantine/core";
import { NavLink, useLocation } from "react-router-dom";
import { Group } from "@mantine/core";
import { useState } from "react";
import classes from "./Header.module.css";
function Navigation() {
  const links = [
    { link: "/", label: "About Me" },
    { link: "/Portfolio", label: "Portfolio" },
    { link: "/Contact", label: "Contact" },
    { link: "/Resume", label: "Resume" },
  ];

  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <NavLink
      key={link.label}
      to={link.link}
      //   className={classes.link}
      className={({ isActive }) =>
        `${classes.link} ${
          isActive ? classes.linkActive : classes.linkInactive
        }`
      }
      data-active={active === link.link || undefined}
      //   onClick={(event) => {
      //     event.preventDefault();
      //     setActive(link.link);
      //   }}
    >
      {link.label}
    </NavLink>
  ));
  return (
    <Group gap={5} visibleFrom="xs">
      {items}
    </Group>
  );
}

export default Navigation;
{
  /* <Tabs defaultValue="About Me">
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
    </Tabs> */
}
