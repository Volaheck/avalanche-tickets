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
	// Отделяем последние две цифры
	const lastTwoDigits = price.slice(-2);
	// Отделяем остальные цифры
	const restOfString = price.slice(0, -2);
	// Соединяем части строки с точкой посередине
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
