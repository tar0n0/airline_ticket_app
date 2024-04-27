import React from "react";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { Button, Stack } from "@mui/joy";


import TicketLogo from '../../../assets/images/ticketsLogo.jpeg';
import {toJS} from "mobx";

export const TicketItem: React.FC<Record<string, any>> = ({ ticketData }) => {
    const { origin_name, destination_name, departure_date, departure_time, arrival_date, arrival_time, price, stops } = ticketData;
    console.log(toJS(stops), 'stop')
    return (
        <Card orientation="horizontal" variant="outlined" sx={{ width: 400, mb: 1 }}>
            <CardOverflow>
                <Stack direction="column" alignItems="center" spacing={1}>
                    <AspectRatio ratio="1" sx={{ width: 90 }}>
                        <img
                            src={TicketLogo}
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                    <Button variant="plain" color="primary"  sx={{
                        bgcolor: 'darkorange',
                        color: 'white',
                        '&:hover': {
                            bgcolor: 'darkorange',
                            color: 'white',
                        },
                    }}>
                        Купить <br /> ${price}
                    </Button>
                </Stack>
            </CardOverflow>
            <CardContent>
                <Typography fontWeight="md" textColor="success.plainColor" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {origin_name} <span style={{ margin: '0 5px' }}>&#8594;</span> {destination_name}
                </Typography>
                <Typography level="body-sm" sx={{ textAlign: 'center' }}>
                    <span style={{ fontWeight: 'bold' }}>Departure:</span> {departure_date} {departure_time}
                    <br />
                    <span style={{ fontWeight: 'bold' }}>Arrival:</span> {arrival_date} {arrival_time}
                </Typography>
            </CardContent>
        </Card>
    );
};
