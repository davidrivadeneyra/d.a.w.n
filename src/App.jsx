import { Route, Routes } from "react-router";
import MainPage from "./MainPage";
import NDATemplate from "./components/NDA";
import Roadmap from "./pages/roadmap";
import PrivacyPolicy from "./pages/privacy-policy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/nda" element={<NDATemplate />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
