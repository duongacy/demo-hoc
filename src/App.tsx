import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import User from "./pages/User";
import Home from "./pages/Home";
import Header from "./components/Header";
import InputPage from "./pages/input/InputPage";
import ContentWrapper from "./components/ContentWrapper";

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
          <ul className="list-unstyled ps-0">
            <li className="mb-1">
              <button className="btn align-items-center outline-0">
                Input
              </button>
              <div className="collapse show" id="home-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <Link to="/input" className="link-dark rounded">
                      Input
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="link-dark rounded">
                      Select
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="link-dark rounded">
                      Radio button
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="link-dark rounded">
                      Checkbox
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <ContentWrapper>
          <Switch>
            <Route path="/input">
              <InputPage />
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
