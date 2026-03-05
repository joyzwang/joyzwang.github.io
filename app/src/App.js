import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Layout from "./Layout";
import Submissions from "./Submissions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="submissions" element={<Submissions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
