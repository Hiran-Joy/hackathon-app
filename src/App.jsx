<<<<<<< HEAD
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
    </BrowserRouter>
=======
import './App.css';
import AddTeam from './components/AddTeam';

function App() {
  return (
    <>
      <AddTeam />
    </>
>>>>>>> development
  );
}

export default App;