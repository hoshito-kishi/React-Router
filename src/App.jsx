import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./Routes/Router";
import "./styles.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">HOME</Link>
        <br />
        <Link to="/about">ABOUT</Link>
        <br />
        <Link to="/service">SERVICE</Link>
        <Router />
      </BrowserRouter>
    </>
  );
}
