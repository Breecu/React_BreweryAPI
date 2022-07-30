import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomeScreen from "./pages";
import GoogleMapPage from "./components/googleMapPageComponent/GoogleMapPage";

function App(){
  return (
    <div classname= "App">
      <Router>
        <Route exact path="/" component= {HomeScreen} />
        <Route exact path="/map" component= {GoogleMapPage} />
      </Router>
    </div>
  );

}

export default App;
