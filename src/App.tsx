import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import router from "./routes";
import Header from "./components/Header";

class App extends React.Component {
  public render() {
    return (
      <>
        <div className="App">
          <Router>
            <Header></Header>
            <Switch>
              {router.map((route, i) => (
                <Route {...route} key={i} />
              ))}
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
