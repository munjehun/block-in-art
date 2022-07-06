import "./App.css";
import Main from "./pages/Main";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import SignupChoice from "./pages/SignupChoice";
import SignupPainter from "./pages/SignupPainter";
import SignupUser from "./pages/SignupUser";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signupChoice" element={<SignupChoice />} />
          <Route path="/signupPainter" element={<SignupPainter />} />
          <Route path="/signupUser" element={<SignupUser />} />

          {/* <Route path="/trade" element={<Trade />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/board" element={<PostMain />} />
          <Route path="/postView/:no" element={<PostView />} />
          <Route path="/postWrite" element={<PostWrite />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
