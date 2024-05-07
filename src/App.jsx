import { Route, Routes } from "react-router-dom";
import "./App.css";
import XrCubeContainer from "./components/xr-cube/XrCubeContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<XrCubeContainer />} />
    </Routes>
  );
}

export default App;
