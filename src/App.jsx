import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Assistant from "./pages/Assistant";
import Dashboard from "./pages/Dashboard";
import Emergency from "./pages/Emergency";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/emergency" element={<Emergency />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;