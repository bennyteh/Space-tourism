import React from 'react';
import "./app.css";
import { Navbar } from './components/components';
import {Home, Destination} from "./containers/container"

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <Destination/>
    </div>
  );
}

export default App;
