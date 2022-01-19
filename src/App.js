import React from 'react';
import "./App.css";
import { Navbar } from './components/components';
import {Home, Destination, Crew, Technology} from "./containers/container"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/destination' element={<Destination/>}/>
          <Route path='/crew' element={<Crew />}/>
          <Route path='/technology' element={<Technology />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
