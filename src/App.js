import React from "react";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Detail from "./components/Detail/Detail";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/home" element={<Home />}></Route>
      <Route exact path="/:id" element={<Detail />}></Route>
      <Route path="*" element={<NoMatch />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
