import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Titanes from "./pages/Titanes";
import About from "./pages/About";
import ProtectedRoute from "./layouts/ProtectedRoute";
import LoginForm from "./pages/LoginForm";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/titanes" element={<Titanes />} />
          <Route path="/about" element={<About />} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
