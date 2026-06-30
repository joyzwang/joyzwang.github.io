import { HashRouter, Routes, Route } from "react-router-dom";
import Page from "./Page";
import Layout from "./Layout";
import "./style.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact index element={<Page name="home" />} />
          <Route exact path="about" element={<Page name="about" />} />
          <Route exact path="read" element={<Page name="read" pdf="true" />} />
          <Route path="404" element={<h3>Not found</h3>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
