import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Homepage from "./components/Homepage";
import Visit from "./components/Visit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
