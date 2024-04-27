import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export  const CurrenciesList:({currencies}: { currencies?: string[] }) => JSX.Element  = ({ currencies = ['RUB', 'USD', 'EUR'] }): JSX.Element =>  {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {currencies.map((currency: string) => (
                    <Grid item xs={4} key={currency}>
                        <Item sx={{
                            border: '1px solid blue',
                            borderRadius: '4px',
                            padding: '8px',
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: 'blue',
                                color: 'white',
                            },
                        }}>{currency}</Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
