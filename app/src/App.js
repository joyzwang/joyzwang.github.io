import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="submit" element={<h2>Submit</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
