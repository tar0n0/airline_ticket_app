import { ConfigsTypes } from '../types/configsTypes';

export const configs: ConfigsTypes = {
    connection: {
        server_url: `${process.env.PUBLIC_URL}/tickets/tickets.json`
    },
};
