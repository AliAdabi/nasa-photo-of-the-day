import React, { useState, useEffect }  from "react";
import axios from "axios";
import Header from './components/Header';
import PhotoCard from './components/PhotoCard';
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header/>
      <PhotoCard/>
    </div>
  );
}

export default App;
