import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./Page";
import Layout from "./Layout";
import "./style.css";

function App() {
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route exact index element={<Page name="home" />} />
          <Route exact path="about" element={<Page name="about" />} />
          <Route exact path="read" element={<Page name="read" pdf="true" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
