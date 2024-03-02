import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Users } from "./Components/Users";
import { Userdetails } from "./Components/Userdetails";
import { Contact } from "./Components/Contact";
import { Login } from "./Components/Login";
import { About } from "./Components/About";
import { PrivateRoute } from "./Components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/users/:userid" element={<Userdetails />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
