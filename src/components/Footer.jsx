import { Container, Group, Anchor } from "@mantine/core";
import classes from "./Footer.module.css";
const links = [
  { link: "https://github.com/ThirstyWombat", label: "Github" },
  { link: "#", label: "LinkedIn" },
  { link: "#", label: "Stack Overflow" },
];

export default function Footer() {
  const items = links.map((link) => (
    <Anchor key={link.label} href={link.link} size="sm">
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
