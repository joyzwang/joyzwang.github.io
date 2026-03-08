import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Page from "./Page";
import Layout from "./Layout";
import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Page name='about' />} />
          <Route path="submissions" element={<Page name='submissions' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
