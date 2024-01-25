import { NavLink } from "react-router-dom";
import { Group } from "@mantine/core";
import classes from "./Header.module.css";
function Navigation() {
  const links = [
    { link: "/", label: "About Me" },
    { link: "/Portfolio", label: "Portfolio" },
    { link: "/Contact", label: "Contact" },
    { link: "/Resume", label: "Resume" },
  ];

  const items = links.map((link) => (
    <NavLink
      key={link.label}
      to={link.link}
      className={({ isActive }) =>
        `${classes.link} ${isActive ? classes.linkActive : ""}`
      }
    >
      {link.label}
    </NavLink>
  ));
  return <Group gap={5}>{items}</Group>;
}

export default Navigation;
