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
      className={({ isActive }) =>
        `${classes.link} ${isActive ? classes.linkActive : ""}`
      }
      data-active={active === link.link || undefined}
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
