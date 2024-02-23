import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    <div className="app">
{/* <h2> youtube clone</h2> */}
     <Header />
    <div className="app__page">
    <Sidebar />
    </div>
    </div>
  );
}

export default App;
