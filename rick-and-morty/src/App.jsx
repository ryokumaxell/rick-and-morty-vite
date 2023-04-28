import styleApp from "./App.module.css";
import Headnav from "./components/Head_nav/Headnav";
import { Route, Routes } from "react-router-dom";
import Home from "./view/Home/Home";
import Characters from "./view/Characters/Characters";
import About from "./view/About/About";
import Login from "./view/Login/Login";
import Detail from "./view/Detail/Detail";
import Error404 from "./view/404/Error404";

export default function App() {
 

  return (
    <div className={styleApp.container}>
      <Headnav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      
    </div>
  );
}