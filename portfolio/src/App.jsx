import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import { MantineProvider } from "@mantine/core";
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
      </MantineProvider>
    </>
  );
}

export default App;
