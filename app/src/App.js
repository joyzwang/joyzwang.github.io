import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./Page";
import Layout from "./Layout";
import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Page name="home" />} />
          <Route path="about" element={<Page name="about" />} />
          <Route path="read" element={<Page name="read" pdf="true" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
