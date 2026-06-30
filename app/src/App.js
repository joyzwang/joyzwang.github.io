import { HashRouter, Routes, Route } from "react-router-dom";
import Page from "./Page";
import Layout from "./Layout";
import "./style.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Page name="home" />} />
          <Route path="about" element={<Page name="about" />} />
          <Route path="read" element={<Page name="read" pdf="true" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
