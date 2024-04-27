import { action, flow, makeObservable, observable } from "mobx";

import { ticketDataService } from "../services/ticketDataService";

type TicketFilterParams = { isAll: boolean; stops?: number[] };

class TicketsStore {
    tickets: Record<string, string | number>[] = [];

    ticketFiltersParams: TicketFilterParams = { isAll: true, stops: [] };

    filteredTicket: Record<string, string | number>[] = [];

    constructor() {
        makeObservable(this, {
            tickets: observable,
            filteredTicket: observable,
            ticketFiltersParams: observable,
            setTickets: action.bound,
            setFilteredTicket: action.bound,
            updateTicketFiltersParams: action.bound,
            fetchTicketsDataAndSet: flow.bound,
        })
    }
    
    setTickets(tickets: Record<string, string | number>[]): void {
        this.tickets = tickets
    }

    updateTicketFiltersParams(event: React.ChangeEvent<HTMLInputElement>, value: number | string): void {
        const isChecked: boolean = event.target.checked;
        const { tickets, ticketFiltersParams, setFilteredTicket } = this;

        let stops: number[] = ticketFiltersParams.stops || [];

        if (value === "all") {
            stops = isChecked ? [] : [];
        } else {
            if (isChecked) {
                stops.push(+value);
            } else {
                stops = stops.filter(stop => stop !== +value);
            }
        }

        const isAll: boolean = stops.length === 0;
        this.ticketFiltersParams = { isAll, stops };

        if (isAll) {
            setFilteredTicket(tickets);
        } else {
            const filteredTicket = tickets.filter(item => stops.includes(+item.stops));
            setFilteredTicket(filteredTicket);
        }
    }

    setFilteredTicket(filteredTicket: Record<string, string | number>[]): void {
        this.filteredTicket = filteredTicket;
    }

     *fetchTicketsDataAndSet() {
        const { tickets } = yield ticketDataService.getTicketsData()
        this.setTickets(tickets);
        this.setFilteredTicket(tickets);
    }
}

export const ticketsStore: TicketsStore  = new TicketsStore();