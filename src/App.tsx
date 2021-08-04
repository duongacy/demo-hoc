import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import User from "./pages/User";
import Home from "./pages/Home";
import Header from "./components/Header";
import ContentWrapper from "./components/ContentWrapper";
import InputPage from "./pages/Input";
import SelectPage from "./pages/Select";
function App() {
  return (
    <Router>
      <Header />
      <div className="d-flex">
        <div className="flex-shrink-0 p-3 bg-white" style={{ width: 280 }}>
          <a
            href="/"
            className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
          >
            <svg className="bi me-2" width={30} height={24}>
              <use xlinkHref="#bootstrap" />
            </svg>
            <span className="fs-5 fw-semibold">Collapsible</span>
          </a>
          <ul className="list-unstyled px-5">
            <li>
              <Link
                to="/input"
                className="link-dark rounded text-decoration-none"
              >
                Input
              </Link>
            </li>
            <li>
              <Link
                to="/select"
                className="link-dark rounded text-decoration-none"
              >
                Select
              </Link>
            </li>
          </ul>
        </div>
        <ContentWrapper>
          <Switch>
            <Route path="/input">
              <InputPage />
            </Route>
            <Route path="/select">
              <SelectPage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ContentWrapper>
      </div>
    </Router>
  );
}

export default App;
