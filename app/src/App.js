import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="submit" element={<h1>Submit</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
