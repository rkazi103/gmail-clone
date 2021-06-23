import React from "react";
import Header from "./components/header/";
import Sidebar from "./components/sidebar/";
import GlobalStyles from "./styles/globalStyles";

function App() {
  return (
    <div className="app">
      <GlobalStyles />

      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
