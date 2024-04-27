import React, { useEffect } from 'react';

import Header from "./components/header";
import { ticketsStore } from "./store";
import { LeftColumn } from "./components/leftColumn";
import { RightColumn } from "./components/rightColumn";
import Grid from "@mui/material/Grid";

const App:React.FC = ():JSX.Element => {

  useEffect((): void => {
    ticketsStore.fetchTicketsDataAndSet();
  }, [])

  return (
    <div>
        <Header />
        <Grid container spacing={2} sx={{mt: 2}}>
            <LeftColumn />
            <RightColumn />
        </Grid>
    </div>
  );
}

export default App;
