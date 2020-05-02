import React, { useState, useEffect }  from "react";
import axios from "axios";
import Header from './components/Header';
import PhotoCard from './components/PhotoCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import styled from 'styled-components';


const StyledApp = styled.div`
  border: 3px green solid;
  background-color: lightgreen;
  width: 80%;
  border-radius: 20px;
`

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  border: 2px black solid;
  width: 650px;
  padding: 5px;
  margin: 10px auto;
`

function App() {
  return (
    <StyledApp>
    <div className="App">
      <Header/>
      <PhotoCard/>
    </div>
    </StyledApp>
  );
}

export default App;
