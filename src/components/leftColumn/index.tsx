import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CurrenciesList } from "./currencies";
import { Checkbox, FormControlLabel } from "@mui/material";
import Grid from "@mui/material/Grid";
import {ticketsStore} from "../../store";
import {observer} from "mobx-react-lite";

export const LeftColumn:React.FC = observer((): JSX.Element => {
    const { updateTicketFiltersParams, filteredTicket,  ticketFiltersParams: { isAll }} = ticketsStore;
    return (
        <Grid xs={4}>
            <Box sx={{ width: 275, position: 'fixed', left: 50 }}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography sx={{ fontSize: 14, mb: 3 }} color="text.secondary" gutterBottom>
                            Валюта
                        </Typography>
                        <Typography component="div">
                            <CurrenciesList />
                        </Typography>
                        <Typography sx={{ mb: 2, mt: 3 }} color="text.secondary">
                            Количество пересадок
                        </Typography>
                        <div>
                            <FormControlLabel control={<Checkbox checked={isAll} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateTicketFiltersParams(e, 'all')}/>} label="Все"/>
                            <FormControlLabel control={<Checkbox onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateTicketFiltersParams(e, '0')}/>} label="Без пересадок" />
                            <FormControlLabel control={<Checkbox onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateTicketFiltersParams(e, '1')}/>} label="Пересадок 1" />
                            <FormControlLabel control={<Checkbox onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateTicketFiltersParams(e, '2')}/>} label="Пересадок 2" />
                            <FormControlLabel control={<Checkbox onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateTicketFiltersParams(e, '3')}/>} label="Пересадок 3" />
                        </div>
                    </CardContent>
                </Card>
            </Box>
        </Grid>

    );
});

