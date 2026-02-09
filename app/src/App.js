import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Submissions from "./Submissions";
import { useEffect, useState } from "react";
import { parseMenu } from "./jsonparser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="submissions" element={<Submissions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
