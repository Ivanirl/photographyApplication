import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "./pages/HomePage";
import AboutPage from "./pages/About";
import Gallery from "./pages/Gallery";
import SignUp from "./pages/SignUp";
import DefaultLayout from "./components/Layout";

function App() {
  return <DefaultLayout>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Gallery" element={<Gallery/>}></Route>
      <Route path="/About" element={<AboutPage/>}></Route>
      <Route path="/Signup" element={<SignUp/>}></Route>
    </Routes>
  </DefaultLayout>;
}

export default App;
