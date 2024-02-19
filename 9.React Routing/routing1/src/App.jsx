import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import { Navabr } from "./components/Navbar";
import { Product } from "./components/Products";
import { Users } from "./components/Users";
import { Userdetails } from "./components/Userdetails";

function App() {
  return (
    <div className="App">
      <Navabr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contactus" element={<Contact />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:userid" element={<Userdetails />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
