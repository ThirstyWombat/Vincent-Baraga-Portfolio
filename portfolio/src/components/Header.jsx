import { AppShell, Burger, Center } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Navigation from "./Navigation";
function Header() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 100 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Navigation />
      </AppShell.Header>

      {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}

      {/* <AppShell.Main>Main</AppShell.Main> */}
    </AppShell>
  );
}

export default Header;
