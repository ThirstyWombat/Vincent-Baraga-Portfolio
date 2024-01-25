import { Container } from "@mantine/core";
import Navigation from "./Navigation";
import classes from "./Header.module.css";
function Header() {
  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <h1>Vincent Baraga</h1>
        <Navigation />
      </Container>
    </header>
  );
}

export default Header;
