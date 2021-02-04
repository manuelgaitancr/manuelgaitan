import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Error404 from "./components/Error-404";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/inicio" component={Home} />
              <Route exact path="/acerca-de-mi" component={About} />
              <Route exact path="/portafolio" component={Portfolio} />
              <Route exact path="/contacto" component={Contact} />
              <Route exact path="*" component={Error404} />
            </Switch>
          </main>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
