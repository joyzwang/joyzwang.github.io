import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./Page";
import Layout from "./Layout";
import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Page name="home" pdf="true" />} />
          <Route path="about" element={<Page name="about" />} />
          <Route path="submissions" element={<Page name="submissions" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
