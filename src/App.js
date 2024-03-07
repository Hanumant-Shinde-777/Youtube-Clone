import React from 'react';
import "./App.css";
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
    <Router>
    <Header />
      <Switch>
        <Route path ="/search/:searchTerm">
          
          <h1>Search page</h1>
        </Route>

        <Route path ="/">
  
      
    <div className="app__page">
    <Sidebar />
    <RecommendedVideos />
    </div>
        </Route>

      </Switch>
    </Router>
   
    </div>
  );
}

export default App;
