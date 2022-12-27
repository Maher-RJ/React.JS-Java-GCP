import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import GcsData from "../pages/gcsData";
const NotFound = lazy(() => import("../pages/not_found/NotFound"));

export default () => {
  return (
    <div className="private-routes-wrapper">
      <Switch>
        <Route exact path="/" component={GcsData} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
};
