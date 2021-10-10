import { Route, Switch } from "react-router-dom";
import { Home } from "../Home";
import { About } from "../About";
import { ServiceRouter } from "./ServiceRouter";

export const Router = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route
        path="/service"
        render={({ match: { url } }) => (
          <Switch>
            {ServiceRouter.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.item}
              </Route>
            ))}
          </Switch>
        )}
      />
    </>
  );
};
