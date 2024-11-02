import React from "react";
import GlobalStyles from "./styles/globalStyles";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Sobre from "./components/Sobre";
import Projetos from "./components/projects";
import Contato from "./components/contact";

function App() {
  return (
    <>
      <GlobalStyles />
        <Header />
        <Inicio />
        <Sobre />
        <Projetos />
        <Contato />
    </>
  );
}

export default App;
