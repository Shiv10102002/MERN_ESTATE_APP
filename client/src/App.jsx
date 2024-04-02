import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./component/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import PrivateRoutes from "./component/PrivateRoutes";
import CreateListing from "./pages/CreateListing";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
