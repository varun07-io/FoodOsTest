import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAutheticated, isProfileCompleted } from "../apiHandler/api";

const RestaurantRouter = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAutheticated() && isAutheticated().user.role === "restaurant" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default RestaurantRouter;