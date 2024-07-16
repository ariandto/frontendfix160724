import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard.js";
import Login from "./components/Login.js";
import Navbar from "./components/Navbar.js";
import Register from "./components/Register.js";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardWithNavbar />} />
      

      </Routes>
    </Router>
  );
}

function DashboardWithNavbar() {
  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
}



export default App;
