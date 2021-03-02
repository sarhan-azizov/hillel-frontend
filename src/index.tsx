import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { Provider } from 'use-http';

import "./styles/main.scss";
import { customTheme } from './theme';
import AppRoutes from "./routes";
import { WithCurrentUser } from "./context";

import { HTTP_HOST, HTTP_OPTIONS } from './configs';

ReactDOM.render(
  <StrictMode>
    <CssBaseline>
        <ThemeProvider theme={customTheme}>
            <Router>
                <Provider url={HTTP_HOST} options={HTTP_OPTIONS}>
                    <WithCurrentUser>
                        <AppRoutes />
                    </WithCurrentUser>
                </Provider>
            </Router>
        </ThemeProvider>
    </CssBaseline>
  </StrictMode>,
  document.getElementById("root")
);