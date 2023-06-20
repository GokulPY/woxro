import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Login";
import { Outlet, Link } from "react-router-dom";
import RegistrationForm from "./Signup";
import Home from "./Home";
import Deposit from "./Deposit";
import Transfer from "./Transfer";
import Statement from "./Statement";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Link to="/Login"></Link>
        <Link to="/Signup"></Link>
        <Link to="/Home"></Link>
        <Link to="/Deposit"></Link>
        <Link to="/Transfer"></Link>
        <Link to="/Statement"></Link>
      <Outlet />
      <Routes>
        <Route path='/' element={<LoginForm />}></Route>
        <Route path='/Login' element={<LoginForm />}></Route>
        <Route path='/Signup' element={<RegistrationForm />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Deposit' element={<Deposit />}></Route>
        <Route path='/Transfer' element={<Transfer />}></Route>
        <Route path='/Statement' element={<Statement />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export {App};

