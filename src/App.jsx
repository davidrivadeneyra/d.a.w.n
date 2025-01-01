import { Route, Routes } from "react-router";
import MainPage from "./MainPage";
import NDATemplate from "./components/NDA";
import Roadmap from "./pages/roadmap";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/nda" element={<NDATemplate />} />
      <Route path="/roadmap" element={<Roadmap />} />
    </Routes>
  );
}

export default App;
