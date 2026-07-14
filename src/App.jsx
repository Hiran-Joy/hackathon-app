import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import AddTeam from "./components/AddTeam";
import ViewTeam from "./components/ViewTeam";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />

      <Routes>
        <Route path="/add" element={<AddTeam />} />
        <Route path="/view" element={<ViewTeam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;