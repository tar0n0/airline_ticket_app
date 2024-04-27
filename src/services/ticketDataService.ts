import { MakeRequest } from "../api/makeRequests";
import { configs } from "../configs";

class TicketDataService extends MakeRequest {
    constructor(requestUrl: string) {
        super(requestUrl);
    }

    async getTicketsData(url: string = ''): Promise<any> {
        return  await this.getJson(url)
    }
}

export const ticketDataService: TicketDataService = new TicketDataService(configs.connection.server_url);