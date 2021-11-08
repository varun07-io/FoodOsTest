import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAutheticated } from "../apiHandler/api";

const BranchRouter = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAutheticated() && isAutheticated().user.role === 0 ? (
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

export default BranchRouter;