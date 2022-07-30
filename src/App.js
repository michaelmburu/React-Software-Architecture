import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { About } from "./pages/About";
import { Articles } from "./pages/Articles";
import { Home } from "./pages/Home";


// Server side rendering
function App() {
  return (
    <div>
      <h1>Server Side Rendering Example</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
