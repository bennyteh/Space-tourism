import React from 'react';
import "./app.css";
import {Navbar, Home, Destination, Crew, Technology} from "./components/container";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Destination />
      <Crew />
      <Technology />
    </div>
  );
}

export default App;
