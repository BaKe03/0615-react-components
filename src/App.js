import { useState } from "react";
import { DefaultContext } from "./Context";

//импортируем стили
import "./App.css";

import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";
import { DarkModeProvider } from "./Context";

export default function App() {
  const [fan, setFan] = useState("");

  const handleCreateFan = ({ name }) => {
    setFan(name);
  };

  return (
    <DefaultContext.Provider value={{ handleCreateFan }}>
      <DarkModeProvider> <Header fan={fan} /> </DarkModeProvider>
      
      <hr />
      <Content />
      <hr />
      
      <DarkModeProvider> <Footer /> </DarkModeProvider>
    </DefaultContext.Provider>
  );
}
