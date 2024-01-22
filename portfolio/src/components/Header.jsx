import { AppShell, Burger, Center, Container } from "@mantine/core";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import Navigation from "./Navigation";
import classes from "./Header.module.css";
function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Navigation />
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}

export default Header;
{
  /* <AppShell
      header={{ height: 99 }}
      navbar={{
        width: 299,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Navigation />
      </AppShell.Header>

      {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */
}

{
  /* <AppShell.Main>Main</AppShell.Main> */
}
// </AppShell> */}
