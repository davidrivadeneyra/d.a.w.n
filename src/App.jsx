import { Route, Routes } from "react-router";
import MainPage from "./MainPage";
import NDATemplate from "./components/NDA";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/nda" element={<NDATemplate />} />
    </Routes>
  );
}

export default App;
