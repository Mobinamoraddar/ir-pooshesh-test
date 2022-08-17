import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Login from "./Login";
import Homepage from "./components/Homepage";
import PrivateRoute from "./PrivateRoute";
import Visit from "./components/Visit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      {/* <Route element={<PrivateRoute />}>
        <Route path="/visit" element={<Visit />} />
      </Route> */}
    </Routes>
  );
}

export default App;

//  <Routes>
//       <Route path="/" element={<Homepage />} />
//       <Route path="/login" element={<Login />} />
//     </Routes>
