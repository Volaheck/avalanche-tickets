import { Link } from "react-router-dom";
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

export const Tickets = ({
	tickets,
	groupId,
}: {
	tickets: ITicket[];
	groupId: number;
}) => {

	return (
		<TicketsWrapper>
			{tickets.map((ticket) => {
				const isLongTerms = ticket.time.length > 2;
				const timeSize = isLongTerms ? 30 : 70;
				return (
					<Link to={`/ticket/${ticket.id}`}>
						<Ticket key={ticket.id}>
							<Service>{ticket.service}</Service>
							<Zone>{ticket.zone}</Zone>
							<Time size={timeSize}>{ticket.time}</Time>
							<Description>{ticket.description}</Description>
							<Price>
								{convertPrice(ticket.price)} <span>PLN</span>
							</Price>
						</Ticket>
					</Link>
				);
			})}
		</TicketsWrapper>
	);
};
