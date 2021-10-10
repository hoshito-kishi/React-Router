import { Route, Switch } from "react-router-dom";
import { Home } from "../Home";
import { AboutRouter } from "./AboutRouter";
import { ServiceRouter } from "./ServiceRouter";

export const Router = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/about"
        render={({ match: { url } }) => (
          <Switch>
            {AboutRouter.map((route) => (
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
