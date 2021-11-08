import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAutheticated } from "../apiHandler/api";

const BranchRouter = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAutheticated() && isAutheticated().data.branch.role === 1 ? (
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