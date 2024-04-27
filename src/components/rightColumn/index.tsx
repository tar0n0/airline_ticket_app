import React from "react";
import { observer } from "mobx-react-lite";

import { ticketsStore } from "../../store";
import { TicketItem } from "./ticketItem";
import Grid from "@mui/material/Grid";

export const RightColumn: React.FC = observer(():JSX.Element => {
    const { filteredTicket, ticketFiltersParams } = ticketsStore;
    console.log(ticketFiltersParams, '>>>>>>>>>' )
    return (
        <Grid container xs={4} justifyContent="center">
            <div>
                {filteredTicket.map(ticketData => {
                    return <TicketItem ticketData={ticketData}/>
                })}
            </div>
        </Grid>

    )
})