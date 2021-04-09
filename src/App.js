import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import MessageButton from "./components/MessageButton";
import Page from "./components/Page";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <div className="app">
      <Header />
      <Page />
      <MessageButton />

      {/* <button onClick={open}>Open</button> */}
    </div>
  );
}

export default App;
