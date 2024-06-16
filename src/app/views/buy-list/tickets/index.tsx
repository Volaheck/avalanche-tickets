import { ITicket } from "../index";
import {
	TicketsWrapper,
	Ticket,
	Service,
	Zone,
	Time,
	Description,
	Price,
} from "./styled";

function convertPrice(price: string) {
	const lastTwoDigits = price.slice(-2);
	const restOfString = price.slice(0, -2);
	return restOfString + "." + lastTwoDigits;
}

export const Tickets = ({ tickets, groupId }: { tickets: ITicket[], groupId: number }) => {
	let timeSize = 70;
	if(groupId === 1) timeSize = 30;
	return (
		<TicketsWrapper>
			{tickets.map((ticket) => {
				return (
					<Ticket key={ticket.id}>
						<Service>{ticket.service}</Service>
						<Zone>{ticket.zone}</Zone>
						<Time size={ticket.id === 9 ? 37 : timeSize}>{ticket.time}</Time>
						<Description>{ticket.description}</Description>
						<Price>
							{convertPrice(ticket.price)} <span>PLN</span>
						</Price>
					</Ticket>
				);
			})}
		</TicketsWrapper>
	);
};
