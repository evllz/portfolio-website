import "./styles.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import profile from "./data/profile.jpg";

export default function App() {
  return (
    <div className="maincontainer">
      <div className="bio">
        <div className="imageContainer">
          <img
            title="Erick Villegaz"
            src={profile}
            style={{
              backgroundColor: "gray",
              height: "300px",
              width: "300px",
              borderRadius: "50%",
            }}></img>
        </div>

        <div className="textContainer">
          <h1>Erick Villgaz</h1>
          <h2>Full Stack Dev</h2>
          <p>Life is like an RPG, grinding that EXP is part of it!</p>
        </div>
      </div>
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/" component={Skills} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
