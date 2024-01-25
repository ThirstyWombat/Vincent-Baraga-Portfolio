import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { MantineProvider, Container } from "@mantine/core";
import "@mantine/core/styles.css";

function App() {
  return (
    <>
      <MantineProvider forceColorScheme="dark">
        <Header />
        <Container size="md">
          <Outlet />
        </Container>
        <Footer />
      </MantineProvider>
    </>
  );
}

export default App;
