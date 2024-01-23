import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MantineProvider>
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
      </MantineProvider>
    </>
  );
}

export default App;
