import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Users } from "./components/Users";
import { Userdetails } from "./components/Userdetails";
import { Contact } from "./components/Contact";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:id" element={<Userdetails />}></Route>
        <Route path="/contactus" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
