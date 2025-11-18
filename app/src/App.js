import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/upwomxn" element={<h1>About Upwomxn</h1>} />
        <Route path="/submit" element={<h1>Submit</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
