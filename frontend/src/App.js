import React, { Fragment, Suspense, lazy } from "react";

import Header from "./components/header";
import "./App.css";
const Public = lazy(() => import("./routes/public"));

const App = () => {
  return (
    <Suspense fallback={<Fragment />}>
      <Header />
      <Public />
    </Suspense>
  );
};

export default App;
