import React from 'react';
import './App.css';
import {Table} from './components';

function App() {
    return (
    <div className = "App">
      <h2>Gabriel's Tables</h2>
      <p>Color all is not working yet but its not mandatory, instead the hover is working</p>
      <Table className = "table-class"/>
    </div>
    )
}



export default App;