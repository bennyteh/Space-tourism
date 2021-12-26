import React from 'react';
import "./app.css";
import { Navbar } from './components/components';
import {Home, Destination, Crew, Technology} from "./containers/container"

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <Destination/> */}
      {/* <Crew /> */}
      <Technology />
    </div>
  );
}

export default App;
