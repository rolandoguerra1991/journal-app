import React, { Fragment } from "react";
import { AppRouter } from "./router/AppRouter";
import AppTheme from "./themes/AppTheme";

const App = () => {
  return (
    <Fragment>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </Fragment>
  );
};

export default App;
