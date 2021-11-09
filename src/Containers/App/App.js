import React, { Component } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { StyledEngineProvider } from "@mui/material/styles";

import { RewardsPage } from "../index";

export class App extends Component {
  render() {
    return (
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ height: "100vh" }}>
          <RewardsPage />
        </Container>
      </StyledEngineProvider>
    );
  }
}

export default App;
