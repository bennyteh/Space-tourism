import React from 'react';
import "./app.css";
import { Navbar } from './components/components';
import {Home} from "./containers/container"

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
